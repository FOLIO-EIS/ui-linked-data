import { TYPE_MAP } from '@common/constants/bibframeMapping.constants';
import { AUTHORITATIVE_LABEL_URI, BLANK_NODE_TRAIT, ID_KEY, VALUE_KEY } from '@common/constants/lookup.constants';

export const formatLookupOptions = (
  data: LoadSimpleLookupResponseItem[] = [],
  parentURI?: string,
): MultiselectOption[] =>
  data
    .filter(dataItem => {
      const id = dataItem[ID_KEY];
      return id !== parentURI && !id?.includes(BLANK_NODE_TRAIT);
    })
    .map<MultiselectOption>(option => {
      const optionUri = option[ID_KEY];
      const label = option[AUTHORITATIVE_LABEL_URI]?.[0]?.[VALUE_KEY] ?? '';

      return {
        value: { label, uri: optionUri },
        label,
        __isNew__: false,
      };
    });

export const getBFGroup = (typeMap: FieldTypeMap, propertyURI: string) =>
  Object.values(typeMap).find(({ field }) => field.uri === propertyURI);

export const filterLookupOptionsByMappedValue = (lookupData: MultiselectOption[], propertyURI?: string) => {
  if (!propertyURI) return lookupData;

  let filteredLookupData = lookupData;
  const bfGroup = getBFGroup(TYPE_MAP, propertyURI);

  if (bfGroup) {
    const bf20Uris = Object.values(bfGroup.data).map(({ uri }) => uri);

    filteredLookupData = lookupData.filter(({ value }) => bf20Uris.includes(value.uri));
  }

  return filteredLookupData;
};

export const filterLookupOptionsByParentBlock = (
  lookupData?: MultiselectOption[] | Nullish,
  propertyURI?: string,
  parentBlockUri?: string,
) => {
  if (!lookupData) return;

  if (!parentBlockUri || !propertyURI) return lookupData;

  let filteredLookupData = lookupData;
  const bfGroup = getBFGroup(TYPE_MAP, propertyURI);

  if (bfGroup) {
    const bf20MappedData = Object.values(bfGroup.data);

    filteredLookupData = lookupData.filter(({ value }) =>
      bf20MappedData.find(
        (data: FieldTypeMapDataValue) => data.uri === value.uri && data.parentBlock?.bfLiteUri === parentBlockUri,
      ),
    );
  }

  return filteredLookupData;
};