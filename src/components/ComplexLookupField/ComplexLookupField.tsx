import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { IS_EMBEDDED_MODE } from '@common/constants/build.constants';
import { COMPLEX_LOOKUPS_CONFIG, VALUE_DIVIDER } from '@common/constants/complexLookup.constants';
import { useComplexLookup } from '@common/hooks/useComplexLookup';
import { Input } from '@components/Input';
import CloseIcon from '@src/assets/times-16.svg?react';
import { ModalComplexLookup } from './ModalComplexLookup';
import './ComplexLookupField.scss';

interface Props {
  entry: SchemaEntry;
  value?: UserValueContents[];
  onChange: (uuid: string, contents: Array<UserValueContents>) => void;
}

export const ComplexLookupField: FC<Props> = ({ value = undefined, entry, onChange }) => {
  const { layout } = entry;
  const lookupConfig = COMPLEX_LOOKUPS_CONFIG[layout?.api as string];
  const buttonConfigLabel = lookupConfig?.labels?.button;

  const { localValue, isModalOpen, openModal, closeModal, handleDelete, handleAssign, handleOnChangeBase } =
    useComplexLookup({
      entry,
      value,
      lookupConfig,
      onChange,
    });

  return (
    <>
      {layout?.isNew ? (
        <div className="complex-lookup">
          {!!localValue.length && (
            <div className="complex-lookup-value" data-testid="complex-lookup-value">
              {localValue?.map(({ id, label }) => (
                <div
                  key={id}
                  className={classNames([
                    'complex-lookup-selected',
                    IS_EMBEDDED_MODE && 'complex-lookup-selected-embedded',
                  ])}
                  data-testid="complex-lookup-selected"
                >
                  <span className="complex-lookup-selected-label" data-testid="complex-lookup-selected-label">
                    {label}
                  </span>
                  <button
                    role="button"
                    onClick={() => handleDelete(id)}
                    className="complex-lookup-selected-delete"
                    data-testid="complex-lookup-selected-delete"
                  >
                    <CloseIcon />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button role="button" className="complex-lookup-select-button button-passive" onClick={openModal}>
            <FormattedMessage id={localValue?.length ? buttonConfigLabel?.change : buttonConfigLabel?.base} />
          </button>

          <ModalComplexLookup
            isOpen={isModalOpen}
            onClose={closeModal}
            onAssign={handleAssign}
            assignEntityName={layout.api}
            baseLabelType={layout.baseLabelType}
          />
        </div>
      ) : (
        <Input
          onChange={handleOnChangeBase}
          value={localValue?.map(({ label }) => label).join(VALUE_DIVIDER) ?? ''}
          disabled={true}
          data-testid="complex-lookup-input"
        />
      )}
    </>
  );
};
