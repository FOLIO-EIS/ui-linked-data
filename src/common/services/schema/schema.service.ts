import { v4 as uuidv4 } from 'uuid';
import { CONSTRAINTS, RESOURCE_TEMPLATE_IDS, GROUP_BY_LEVEL } from '@common/constants/bibframe.constants';
import { AdvancedFieldType } from '@common/constants/uiControls.constants';
import { getUris } from '@common/helpers/bibframe.helper';
import { getAdvancedFieldType } from '@common/helpers/common.helper';
import {
  getParentEntryUuid,
  getUdpatedAssociatedEntries,
  normalizeLayoutProperty,
} from '@common/helpers/schema.helper';
import { generateEmptyValueUuid } from '@common/helpers/complexLookup.helper';
import { ISelectedEntries } from '@common/services/selectedEntries/selectedEntries.interface';
import { ISchema } from './schema.interface';
import { IEntryPropertiesGeneratorService } from './entryPropertiesGenerator.interface';

export class SchemaService implements ISchema {
  private templates: ResourceTemplates;
  private entry: ProfileEntry | ResourceTemplate | PropertyTemplate;
  private schema: Map<string, SchemaEntry>;
  private supportedEntries: string[];

  constructor(
    private selectedEntriesService: ISelectedEntries,
    private entryPropertiesGeneratorService?: IEntryPropertiesGeneratorService,
  ) {
    this.schema = new Map();
    this.supportedEntries = Object.keys(RESOURCE_TEMPLATE_IDS);
    this.templates = {};
    this.entry = {} as ProfileEntry;
  }

  init(templates: ResourceTemplates, entry: ProfileEntry | ResourceTemplate | PropertyTemplate) {
    this.schema = new Map();
    this.templates = templates;
    this.entry = entry;
  }

  get() {
    return this.schema;
  }

  generate(initKey: string) {
    try {
      this.traverseProfile({ entry: this.entry, uuid: initKey });
      this.entryPropertiesGeneratorService?.applyHtmlIdToEntries(this.schema);
    } catch (error) {
      console.error('Cannot generate a schema', error);
    }
  }

  private traverseProfile({ entry, uuid = uuidv4(), path = [], auxType, firstOfSameType = false }: TraverseProfileDTO) {
    const type = auxType || getAdvancedFieldType(entry);
    const updatedPath = [...path, uuid];
    const branchEnds = [AdvancedFieldType.literal, AdvancedFieldType.simple, AdvancedFieldType.complex];
    
    this.entryPropertiesGeneratorService?.addEntryWithHtmlId(uuid);

    if (branchEnds.includes(type as AdvancedFieldType)) {
      const {
        id,
        propertyURI,
        propertyLabel,
        mandatory,
        repeatable,
        valueConstraint: { useValuesFrom, editable, valueDataType },
        layout,
        dependsOn,
      } = entry as PropertyTemplate;

      const constraints = {
        ...CONSTRAINTS,
        mandatory: Boolean(mandatory),
        repeatable: Boolean(repeatable),
        editable: Boolean(editable),
        useValuesFrom,
        valueDataType,
      };

      const { uriBFLite } = getUris({
        uri: propertyURI,
        dataTypeURI: valueDataType?.dataTypeURI,
        schema: this.schema,
        path,
      });

      this.schema.set(
        uuid,
        this.generateSchemaEntry(
          {
            bfid: id,
            uuid,
            type,
            path: [...path, uuid],
            displayName: propertyLabel,
            uri: propertyURI,
            uriBFLite,
            constraints,
          },
          layout,
          dependsOn,
        ),
      );
    } else {
      switch (type) {
        // parent types (i.e Monograph)
        case AdvancedFieldType.profile: {
          const { title, id, resourceTemplates } = (entry as ProfileEntry).json.Profile;
          const uuidArray = resourceTemplates.map(() => uuidv4());

          this.schema.set(uuid, {
            uuid,
            type,
            path: updatedPath,
            displayName: title,
            bfid: id,
            children: uuidArray,
          });

          for (const [index, entry] of resourceTemplates.entries()) {
            this.traverseProfile({
              entry,
              uuid: uuidArray[index],
              path: updatedPath,
            });
          }

          return;
        }
        case AdvancedFieldType.hidden:
        case AdvancedFieldType.dropdownOption:
        // i.e. Work, Instance, Item
        case AdvancedFieldType.block: {
          const { id, resourceURI, resourceLabel, propertyTemplates } = entry as ResourceTemplate;
          const { uriBFLite } = getUris({ uri: resourceURI, schema: this.schema, path });
          const uuidArray = propertyTemplates.map(() => uuidv4());
          const isProfileResourceTemplate = path.length <= GROUP_BY_LEVEL;

          if (!this.supportedEntries.includes(id) && isProfileResourceTemplate) return;

          if (type === AdvancedFieldType.dropdownOption && firstOfSameType) {
            this.selectedEntriesService.addNew(undefined, uuid);
          }

          this.schema.set(uuid, {
            uuid,
            type,
            path: updatedPath,
            displayName: resourceLabel,
            bfid: id,
            uri: resourceURI,
            uriBFLite,
            children: uuidArray,
          });

          for (const [index, entry] of propertyTemplates.entries()) {
            this.traverseProfile({
              entry,
              uuid: uuidArray[index],
              path: updatedPath,
            });
          }

          return;
        }
        // parent-intermediate-? types
        case AdvancedFieldType.group:
        case AdvancedFieldType.groupComplex:
        case AdvancedFieldType.dropdown: {
          this.processGroup({
            uuid,
            entry,
            type: type as AdvancedFieldType,
            path,
          });

          return;
        }
        default: {
          console.error('Not implemented.', entry);

          return;
        }
      }
    }
  }

  private processGroup({
    entry,
    path,
    uuid,
    type,
  }: {
    entry: ProfileEntry | ResourceTemplate | PropertyTemplate;
    path: string[];
    uuid: string;
    type: AdvancedFieldType;
  }) {
    const {
      propertyURI,
      propertyLabel,
      mandatory,
      repeatable,
      valueConstraint: { valueTemplateRefs, useValuesFrom, editable, valueDataType },
      layout,
      dependsOn,
    } = entry as PropertyTemplate;
    const { uriBFLite } = getUris({
      uri: propertyURI,
      dataTypeURI: valueDataType?.dataTypeURI,
      schema: this.schema,
      path,
    });

    const constraints = {
      ...CONSTRAINTS,
      mandatory: Boolean(mandatory),
      repeatable: Boolean(repeatable),
      editable: Boolean(editable),
      useValuesFrom,
      valueDataType,
    };

    const newUuid = uuid;
    const uuidArray = valueTemplateRefs.map(() => uuidv4());

    const schemaEntry = this.generateSchemaEntry(
      {
        uuid: newUuid,
        type,
        path: [...path, newUuid],
        displayName: propertyLabel,
        uri: propertyURI,
        uriBFLite,
        constraints,
        children: uuidArray,
      },
      layout,
      dependsOn,
    );

    if (schemaEntry.linkedEntry?.controlledBy) {
      const emptyOptionUuid = generateEmptyValueUuid(newUuid);
      schemaEntry.children = schemaEntry.children ? [emptyOptionUuid, ...schemaEntry.children] : [];

      this.schema.set(emptyOptionUuid, {
        uuid: emptyOptionUuid,
        type: AdvancedFieldType.dropdownOption,
        path: [...path, newUuid, emptyOptionUuid],
        displayName: '',
        bfid: '',
        uri: '',
        uriBFLite: '',
        children: [],
      });

      this.selectedEntriesService.addNew(undefined, emptyOptionUuid);
    }

    this.schema.set(newUuid, schemaEntry);

    // TODO: how to avoid circular references when handling META | HIDE
    if (type === AdvancedFieldType.group) return;

    for (const [index, item] of valueTemplateRefs.entries()) {
      const entry = this.templates[item];

      this.traverseProfile({
        entry,
        auxType: type === AdvancedFieldType.dropdown ? AdvancedFieldType.dropdownOption : AdvancedFieldType.hidden,
        uuid: uuidArray[index],
        path: [...path, newUuid],
        firstOfSameType: index === 0,
      });
    }
  }

  private generateSchemaEntry(schemaEntry: SchemaEntry, layout?: PropertyLayout<string>, dependsOn?: string) {
    if (!layout && !dependsOn) return schemaEntry;

    let updatedSchemaEntry = { ...schemaEntry } as SchemaEntry;

    if (layout) {
      updatedSchemaEntry.layout = normalizeLayoutProperty(layout);
    }

    if (dependsOn) {
      updatedSchemaEntry.dependsOn = dependsOn;

      const parentEntry = this.schema.get(getParentEntryUuid(schemaEntry.path));
      const { controlledByEntry, dependentEntry } = getUdpatedAssociatedEntries({
        schema: this.schema,
        dependentEntry: updatedSchemaEntry,
        parentEntryChildren: parentEntry?.children,
        dependsOnId: dependsOn,
      });

      if (controlledByEntry) {
        this.schema.set(controlledByEntry.uuid as string, controlledByEntry as SchemaEntry);

        updatedSchemaEntry = dependentEntry;
      }
    }

    return updatedSchemaEntry;
  }
}
