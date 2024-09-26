export enum ComplexLookupType {
  Authorities = 'authorities',
}

export const COMPLEX_LOOKUPS_LINKED_FIELDS_MAPPING = {
  subclass: {
    PERSON: {
      bf2Uri: 'http://id.loc.gov/ontologies/bibframe/Person',
      labelId: 'marva.person',
    },
    FAMILY: {
      bf2Uri: 'http://id.loc.gov/ontologies/bibframe/Family',
      labelId: 'marva.family',
    },
    ORGANIZATION: {
      bf2Uri: 'http://id.loc.gov/ontologies/bibframe/Organization',
      labelId: 'marva.organization',
    },
    MEETING: {
      bf2Uri: 'http://id.loc.gov/ontologies/bibframe/Meeting',
      labelId: 'marva.meeting',
    },
    JURISDICTION: {
      bf2Uri: 'http://id.loc.gov/ontologies/bibframe/Jurisdiction',
      labelId: 'marva.jurisdiction',
    },
  },
};

export const EMPTY_LINKED_DROPDOWN_OPTION_SUFFIX = 'empty';
export const VALUE_DIVIDER = ' ,';
export const __MOCK_URI_CHANGE_WHEN_IMPLEMENTING = '__MOCK_URI_CHANGE_WHEN_IMPLEMENTING';
