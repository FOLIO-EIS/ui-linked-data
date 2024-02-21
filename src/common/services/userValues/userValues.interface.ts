import { AdvancedFieldType } from '@common/constants/uiControls.constants';

export interface IUserValues {
  setValue: ({ type, key, value }: { type: AdvancedFieldType; key: string; value: UserValueDTO }) => void;

  getAllValues: () => any;

  getValue: (key: string) => any;
}
