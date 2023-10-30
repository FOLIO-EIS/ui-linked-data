import { ChangeEvent, FC, useState } from 'react';
import { Input } from '../Input';

interface Props {
  displayName: string;
  uuid: string;
  value?: string;
  isDisabled?: boolean;
  onChange: (uuid: string, contents: Array<UserValueContents>) => void;
}

export const LiteralField: FC<Props> = ({ displayName = '', uuid, value = '', isDisabled = false, onChange }) => {
  const [localValue, setLocalValue] = useState(value);

  const handleOnChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setLocalValue(value);

    onChange(uuid, [{ label: value }]);
  };

  return (
    <div data-testid="literal-field" id={uuid}>
      {displayName.trim() ? <div data-testid="literal-field-label">{displayName}</div> : null}
      <Input placeholder={displayName} onChange={handleOnChange} value={localValue} disabled={isDisabled} />
    </div>
  );
};
