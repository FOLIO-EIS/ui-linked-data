import { getLabelEntry } from './schema.data';

export const updatedSchema = new Map([
  [
    'testKey-1',
    {
      bfid: 'monographProfileId',
      children: ['testKey-2'],
      displayName: 'BIBFRAME 2.0 Monograph',
      path: ['testKey-1'],
      type: 'profile',
      uuid: 'testKey-1',
    },
  ],
  [
    'testKey-10',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Dropdown Option 1 Item 2',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-7', 'testKey-10'],
      type: 'literal',
      uri: 'dropdownOption_1_PropertyURI_2',
      uriBFLite: undefined,
      uuid: 'testKey-10',
    },
  ],
  [
    'testKey-11',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Dropdown Option 2 Item 1',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-8', 'testKey-11'],
      type: 'literal',
      uri: 'dropdownOption_2_PropertyURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-11',
    },
  ],
  [
    'testKey-12',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Dropdown Option 2 Item 2',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-8', 'testKey-12'],
      type: 'literal',
      uri: 'dropdownOption_2_PropertyURI_2',
      uriBFLite: undefined,
      uuid: 'testKey-12',
    },
  ],
  [
    'testKey-13',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: ['dropdownOption_2_useValuesFrom'],
        valueDataType: {
          dataTypeURI: 'dropdownOption_2_dataTypeURI',
        },
      },
      displayName: 'Dropdown Option 2 Item 3',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-8', 'testKey-13'],
      type: 'simple',
      uri: 'dropdownOption_2_PropertyURI_3',
      uriBFLite: undefined,
      uuid: 'testKey-13',
    },
  ],
  [
    'testKey-14',
    {
      bfid: 'complexGroup_1',
      children: ['testKey-15', 'testKey-16'],
      displayName: 'Complex Group',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14'],
      type: 'hidden',
      uri: 'complexGroupResourceURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-14',
    },
  ],
  [
    'testKey-15',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Complex group item 1',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14', 'testKey-15'],
      type: 'literal',
      uri: 'complexGroupItemPropertyURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-15',
    },
  ],
  [
    'testKey-16',
    {
      children: ['testKey-17'],
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Complex group item 2',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14', 'testKey-16'],
      type: 'groupComplex',
      uri: 'complexGroupItemPropertyURI_2',
      uriBFLite: undefined,
      uuid: 'testKey-16',
    },
  ],
  [
    'testKey-17',
    {
      bfid: 'complexGroupContent_1',
      children: ['testKey-18'],
      displayName: 'Complex group content',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14', 'testKey-16', 'testKey-17'],
      type: 'hidden',
      uri: 'complexGroupContentResourceURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-17',
    },
  ],
  [
    'testKey-18',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Complex group content item',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14', 'testKey-16', 'testKey-17', 'testKey-18'],
      type: 'literal',
      uri: 'complexGroupContentPropertyUri_1',
      uriBFLite: undefined,
      uuid: 'testKey-18',
    },
  ],
  [
    'testKey-2',
    {
      bfid: 'instanceId',
      children: ['testKey-3', 'testKey-19', 'testKey-4', 'testKey-5', 'testKey-6'],
      displayName: 'BIBFRAME Instance',
      path: ['testKey-1', 'testKey-2'],
      type: 'block',
      uri: 'blockBF2Uri_1',
      uriBFLite: 'block_1',
      uuid: 'testKey-2',
    },
  ],
  [
    'testKey-3',
    getLabelEntry({
      uuid: 'testKey-3',
      uri: 'propertyURI_1',
      uriBFLite: 'uriBFLite_literal_1',
      displayName: 'Literal label 1',
      path: ['testKey-1', 'testKey-2', 'testKey-3'],
    }) as unknown,
  ],
  [
    'testKey-4',
    {
      constraints: {
        defaults: [],
        editable: true,
        mandatory: true,
        repeatable: true,
        useValuesFrom: ['useValuesFromURI_1'],
        valueDataType: {
          dataTypeURI: 'dataTypeURI_1',
        },
      },
      displayName: 'Simple lookup label 1',
      path: ['testKey-1', 'testKey-2', 'testKey-4'],
      type: 'simple',
      uri: 'bf2Uri_simple_1',
      uriBFLite: 'uriBFLite_simple_1',
      uuid: 'testKey-4',
    },
  ],
  [
    'testKey-5',
    {
      children: ['testKey-7', 'testKey-8'],
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Group with dropdown',
      path: ['testKey-1', 'testKey-2', 'testKey-5'],
      type: 'dropdown',
      uri: 'propertyURI_2',
      uriBFLite: 'uriBFLite_group_1',
      uuid: 'testKey-5',
    },
  ],
  [
    'testKey-6',
    {
      children: ['testKey-14'],
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Complex Group',
      path: ['testKey-1', 'testKey-2', 'testKey-6'],
      type: 'groupComplex',
      uri: 'complexGroupPropertyURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-6',
    },
  ],
  [
    'testKey-7',
    {
      bfid: 'dropdownOption_1',
      children: ['testKey-9', 'testKey-10'],
      displayName: 'Dropdown option 1',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-7'],
      type: 'dropdownOption',
      uri: 'dropdownOptionResourceURI_1',
      uriBFLite: 'uriBFLite_option_1',
      uuid: 'testKey-7',
    },
  ],
  [
    'testKey-8',
    {
      bfid: 'dropdownOption_2',
      children: ['testKey-11', 'testKey-12', 'testKey-13'],
      displayName: 'Dropdown option 2',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-8'],
      type: 'dropdownOption',
      uri: 'dropdownOptionResourceURI_2',
      uriBFLite: undefined,
      uuid: 'testKey-8',
    },
  ],
  [
    'testKey-9',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Dropdown Option 1 Item 1',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-7', 'testKey-9'],
      type: 'literal',
      uri: 'dropdownOption_1_PropertyURI_1',
      uriBFLite: 'uriBFLite_option_literal_1',
      uuid: 'testKey-9',
    },
  ],
  [
    'testKey-19',
    getLabelEntry({
      uuid: 'testKey-19',
      uri: 'propertyURI_1',
      uriBFLite: 'uriBFLite_literal_1',
      displayName: 'Literal label 1',
      path: ['testKey-1', 'testKey-2', 'testKey-19'],
    }) as unknown,
  ],
]);

export const updatedSchemaWithRepeatableSubcomponents = new Map([
  [
    'testKey-1',
    {
      bfid: 'monographProfileId',
      children: ['testKey-2'],
      displayName: 'BIBFRAME 2.0 Monograph',
      path: ['testKey-1'],
      type: 'profile',
      uuid: 'testKey-1',
    },
  ],
  [
    'testKey-10',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Dropdown Option 1 Item 2',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-7', 'testKey-10'],
      type: 'literal',
      uri: 'dropdownOption_1_PropertyURI_2',
      uriBFLite: undefined,
      uuid: 'testKey-10',
    },
  ],
  [
    'testKey-11',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Dropdown Option 2 Item 1',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-8', 'testKey-11'],
      type: 'literal',
      uri: 'dropdownOption_2_PropertyURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-11',
    },
  ],
  [
    'testKey-12',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Dropdown Option 2 Item 2',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-8', 'testKey-12'],
      type: 'literal',
      uri: 'dropdownOption_2_PropertyURI_2',
      uriBFLite: undefined,
      uuid: 'testKey-12',
    },
  ],
  [
    'testKey-13',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: ['dropdownOption_2_useValuesFrom'],
        valueDataType: {
          dataTypeURI: 'dropdownOption_2_dataTypeURI',
        },
      },
      displayName: 'Dropdown Option 2 Item 3',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-8', 'testKey-13'],
      type: 'simple',
      uri: 'dropdownOption_2_PropertyURI_3',
      uriBFLite: undefined,
      uuid: 'testKey-13',
    },
  ],
  [
    'testKey-14',
    {
      bfid: 'complexGroup_1',
      children: ['testKey-15', 'testKey-16'],
      displayName: 'Complex Group',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14'],
      type: 'hidden',
      uri: 'complexGroupResourceURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-14',
    },
  ],
  [
    'testKey-15',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Complex group item 1',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14', 'testKey-15'],
      type: 'literal',
      uri: 'complexGroupItemPropertyURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-15',
    },
  ],
  [
    'testKey-16',
    {
      children: ['testKey-17'],
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Complex group item 2',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14', 'testKey-16'],
      type: 'groupComplex',
      uri: 'complexGroupItemPropertyURI_2',
      uriBFLite: undefined,
      uuid: 'testKey-16',
    },
  ],
  [
    'testKey-17',
    {
      bfid: 'complexGroupContent_1',
      children: ['testKey-18'],
      displayName: 'Complex group content',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14', 'testKey-16', 'testKey-17'],
      type: 'hidden',
      uri: 'complexGroupContentResourceURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-17',
    },
  ],
  [
    'testKey-18',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Complex group content item',
      path: ['testKey-1', 'testKey-2', 'testKey-6', 'testKey-14', 'testKey-16', 'testKey-17', 'testKey-18'],
      type: 'literal',
      uri: 'complexGroupContentPropertyUri_1',
      uriBFLite: undefined,
      uuid: 'testKey-18',
    },
  ],
  [
    'testKey-2',
    {
      bfid: 'instanceId',
      children: ['testKey-3', 'testKey-19', 'testKey-4', 'testKey-5', 'testKey-6'],
      displayName: 'BIBFRAME Instance',
      path: ['testKey-1', 'testKey-2'],
      type: 'block',
      uri: 'blockBF2Uri_1',
      uriBFLite: 'block_1',
      uuid: 'testKey-2',
    },
  ],
  [
    'testKey-3',
    getLabelEntry({
      uuid: 'testKey-3',
      uri: 'propertyURI_1',
      uriBFLite: 'uriBFLite_literal_1',
      displayName: 'Literal label 1',
      path: ['testKey-1', 'testKey-2', 'testKey-3'],
    }) as unknown,
  ],
  [
    'testKey-4',
    {
      constraints: {
        defaults: [],
        editable: true,
        mandatory: true,
        repeatable: true,
        useValuesFrom: ['useValuesFromURI_1'],
        valueDataType: {
          dataTypeURI: 'dataTypeURI_1',
        },
      },
      displayName: 'Simple lookup label 1',
      path: ['testKey-1', 'testKey-2', 'testKey-4'],
      type: 'simple',
      uri: 'bf2Uri_simple_1',
      uriBFLite: 'uriBFLite_simple_1',
      uuid: 'testKey-4',
    },
  ],
  [
    'testKey-5',
    {
      children: ['testKey-7', 'testKey-8'],
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Group with dropdown',
      path: ['testKey-1', 'testKey-2', 'testKey-5'],
      type: 'dropdown',
      uri: 'propertyURI_2',
      uriBFLite: 'uriBFLite_group_1',
      uuid: 'testKey-5',
    },
  ],
  [
    'testKey-6',
    {
      children: ['testKey-14'],
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Complex Group',
      path: ['testKey-1', 'testKey-2', 'testKey-6'],
      type: 'groupComplex',
      uri: 'complexGroupPropertyURI_1',
      uriBFLite: undefined,
      uuid: 'testKey-6',
    },
  ],
  [
    'testKey-7',
    {
      bfid: 'dropdownOption_1',
      children: ['testKey-9', 'testKey-10'],
      displayName: 'Dropdown option 1',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-7'],
      type: 'dropdownOption',
      uri: 'dropdownOptionResourceURI_1',
      uriBFLite: 'uriBFLite_option_1',
      uuid: 'testKey-7',
    },
  ],
  [
    'testKey-8',
    {
      bfid: 'dropdownOption_2',
      children: ['testKey-11', 'testKey-12', 'testKey-13'],
      displayName: 'Dropdown option 2',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-8'],
      type: 'dropdownOption',
      uri: 'dropdownOptionResourceURI_2',
      uriBFLite: undefined,
      uuid: 'testKey-8',
    },
  ],
  [
    'testKey-9',
    {
      constraints: {
        defaults: [],
        editable: false,
        mandatory: true,
        repeatable: true,
        useValuesFrom: [],
        valueDataType: {},
      },
      displayName: 'Dropdown Option 1 Item 1',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-7', 'testKey-9'],
      type: 'literal',
      uri: 'dropdownOption_1_PropertyURI_1',
      uriBFLite: 'uriBFLite_option_literal_1',
      uuid: 'testKey-9',
    },
  ],
  [
    'testKey-20',
    getLabelEntry({
      uuid: 'testKey-20',
      uri: 'propertyURI_1',
      uriBFLite: 'uriBFLite_option_literal_1',
      displayName: 'Dropdown Option 1 Item 1',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-7', 'testKey-20'],
    }) as unknown,
  ],
  [
    'testKey-21',
    getLabelEntry({
      uuid: 'testKey-21',
      uri: 'propertyURI_1',
      uriBFLite: 'uriBFLite_option_literal_1',
      displayName: 'Dropdown Option 1 Item 1',
      path: ['testKey-1', 'testKey-2', 'testKey-5', 'testKey-7', 'testKey-21'],
    }) as unknown,
  ],
]);
