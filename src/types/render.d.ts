type UserValueContents = {
  label?: string;
  meta?: {
    uri?: string;
    parentUri?: string;
    type?: string;
  };
};

type UserValue = {
  uuid: string;
  contents: Array<UserValueContents>;
};

type UserValues = Record<string, UserValue>;

type RenderedFieldMap = Map<string, RenderedField>;

type AdvancedFieldType =
  | FieldType
  | 'profile' // Monograph
  | 'block' // Work, Instance, Item
  | 'group' // TBD
  | 'groupComplex'
  | 'hidden'
  | 'dropdown'
  | 'dropdownOption';

type RenderedFieldValue = {
  uri?: string;
  value?: string;
};

type RenderedField = {
  type: AdvancedFieldType;
  fields?: RenderedFieldMap;
  path: string;
  name?: string;
  uri?: string;
  value?: RenderedFieldValue[];
  id?: string;
};

type PreviewMap = Map<string, PreviewBlock>;

type PreviewBlock = {
  title: string;
  groups: Map<string, PreviewGroup>;
};

type PreviewGroup = {
  title: string;
  value: PreviewFieldValue[];
};

type PreviewFieldValue = Partial<RenderedFieldValue> & { field: string };

type PreviewBlockSortValues = {
  [key: string]: number;
};

type Constraints = {
  mandatory: boolean;
  repeatable: boolean;
  editable: boolean;
  defaults: Array<any>;
  useValuesFrom: Array<string>;
  valueDataType: {
    dataTypeURI: string;
  };
};

type SchemaEntry = {
  path: Array<string>;
  uuid: string;
  bfid?: string;
  uri?: string;
  displayName?: string;
  type?: string;
  children?: Array<string>;
  constraints?: Constraints;
};

type SelectableUserValue = {
  uuid: string;
  values: Array<{
    uri: string | null;
    label: string;
  }>;
};

type UserValue = {
  uuid: string;
  values: Array<string>;
};