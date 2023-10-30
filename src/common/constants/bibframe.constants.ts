export const RESOURCE_TEMPLATE_IDS: Record<string, string> = {
  // TODO: revise after demo
  'lc:RT:bf2:Monograph:Work': 'Work',
  'lc:RT:bf2:Monograph:Instance': 'Instance',
};

export const PROFILE_NAMES = {
  MONOGRAPH: 'BIBFRAME 2.0 Monograph',
};

export const PROFILE_BFIDS = {
  MONOGRAPH: 'lc:profile:bf2:Monograph',
  WORK: 'lc:RT:bf2:Monograph:Work',
};

export const TYPE_URIS = {
  INSTANCE: 'http://bibfra.me/vocab/lite/Instance',
};

export const CONSTRAINTS: Constraints = {
  repeatable: false,
  editable: true,
  mandatory: false,
  defaults: [],
  useValuesFrom: [],
  valueDataType: {
    dataTypeURI: '',
  },
};

export const GROUP_BY_LEVEL = 2;

export const GROUPS_WITHOUT_ROOT_WRAPPER = [
  'http://id.loc.gov/ontologies/bibframe/provisionActivity',
  'http://id.loc.gov/ontologies/bibframe/summary',
  'http://id.loc.gov/ontologies/bibframe/language',
  'http://id.loc.gov/ontologies/bibframe/classification',
  'http://id.loc.gov/ontologies/bibframe/tableOfContents',
];

export const LOOKUPS_WITH_SIMPLE_STRUCTURE = [
  'http://bibfra.me/vocab/marc/issuance',
  'http://bibfra.me/vocab/lite/language',
];

export const COMPLEX_GROUPS = ['http://id.loc.gov/ontologies/bibframe/electronicLocator'];

export const HIDDEN_WRAPPERS = ['http://www.w3.org/2000/01/rdf-schema#label'];

// potentially can be merged with the above ? not sure
export const WRAPPERS_TO_HIDE_WHEN_DEPARSING = [
  'http://id.loc.gov/ontologies/bibframe/Summary',
  'http://id.loc.gov/ontologies/bibframe/Language',
  'http://id.loc.gov/ontologies/bibframe/TableOfContents',
];

export const COMPLEX_GROUPS_WITHOUT_WRAPPER = ['http://id.loc.gov/ontologies/bibframe/note'];
