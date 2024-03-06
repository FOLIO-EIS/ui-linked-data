import { filterLookupOptionsByMappedValue, formatLookupOptions } from '@common/helpers/lookupOptions.helper';
import { UserValueType } from './userValueType';
import { IUserValueType } from './userValueType.interface';
import { alphabeticSortLabel } from '@common/helpers/common.helper';
import { BFLITE_TYPES_MAP } from '@common/constants/bibframeMapping.constants';

export class SimpleLookupUserValueService extends UserValueType implements IUserValueType {
  private uri?: string;
  private propertyUri?: string;
  private cachedData: Record<string, MultiselectOption[]>;
  private loadedData?: MultiselectOption[];
  private contents?: UserValueContents[];

  constructor(
    private apiClient: IApiClient,
    private cacheService: ILookupCacheService,
  ) {
    super();

    this.cachedData = { ...this.cacheService.getAll() };
  }

  async generate({ data, uri, uuid, labelSelector, uriSelector, type, propertyUri, groupUri, fieldUri }: UserValueDTO) {
    this.uri = uri;
    this.propertyUri = propertyUri;
    const cachedData = this.getCachedData();

    if (!cachedData) {
      await this.loadData();
    }

    this.contents = [];

    if (Array.isArray(data)) {
      for (const dataEntry of data as RecordBasic[]) {
        this.generateContentItem({
          label: dataEntry[labelSelector as string]?.[0],
          itemUri: dataEntry[uriSelector as string]?.[0],
          uri,
          groupUri,
          type,
          fieldUri,
        });
      }
    } else {
      const typedData = data as RecordBasic;

      this.generateContentItem({
        label: typedData[labelSelector as string]?.[0],
        itemUri: typedData[uriSelector as string]?.[0],
        uri,
        groupUri,
        type,
        fieldUri,
      });
    }

    this.value = {
      uuid,
      contents: this.contents,
    };
  }

  private generateContentItem({
    label,
    itemUri,
    uri,
    groupUri,
    type,
    fieldUri,
  }: {
    label: string;
    itemUri?: string;
    uri?: string;
    groupUri?: string;
    type?: AdvancedFieldType;
    fieldUri?: string;
  }) {
    const typesMap = (BFLITE_TYPES_MAP as FieldTypeMap)[groupUri as string];
    const mappedUri =
      typesMap && itemUri
        ? typesMap?.data?.[itemUri]?.uri || typesMap?.fields?.[fieldUri as string]?.data?.[itemUri]?.uri
        : itemUri;

    // Check if the loaded options contain a value from the record
    const loadedOption = this.cachedData[uri as string]?.find(
      ({ value }) => value.uri === mappedUri || value.label === label,
    );
    const selectedLabel = typesMap && itemUri ? loadedOption?.label || itemUri : loadedOption?.label || label;

    const contentItem = {
      label: selectedLabel,
      meta: {
        parentUri: uri,
        uri: itemUri,
        type,
      },
    };

    this.contents?.push(contentItem);
  }

  private getCachedData() {
    return this.uri ? this.cacheService.getById(this.uri) || this.cachedData?.[this.uri] : undefined;
  }

  private saveLoadedData() {
    if (!this.uri || !this.loadedData) return;

    this.cachedData[this.uri] = this.loadedData;
    this.cacheService.save(this.uri, this.loadedData);
  }

  private async loadData() {
    const response = await this.apiClient.loadSimpleLookupData(this.uri as string);

    if (!response) return;

    const formattedLookupData = formatLookupOptions(response, this.uri);
    const filteredLookupData = filterLookupOptionsByMappedValue(formattedLookupData, this.propertyUri);

    this.loadedData = filteredLookupData?.sort(alphabeticSortLabel);

    this.saveLoadedData();
  }
}
