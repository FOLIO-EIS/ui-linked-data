import { FC, useState } from 'react';
import { FormattedMessage, } from 'react-intl';
import { ActionMeta, createFilter, GroupBase, MultiValue, StylesConfig } from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { useSimpleLookupObserver } from '@common/hooks/useSimpleLookupObserver';
import { useSearchFilterLookupOptions } from '@common/hooks/useSearchFilterLookupOptions';
import { SIMPLE_LOOKUPS_ENABLED } from '@common/constants/feature.constants';
import { DropdownIndicator } from './DropdownIndicator';
import { MultiValueRemove } from './MultiValueRemove';
import { ClearIndicator } from './ClearIndicator';
import { OptionMultiline } from './OptionMultiline';
import { SimpleLookupFieldStyles } from './SimpleLookupField.styles';
import './SimpleLookupField.scss';

type SimpleLookupFilterProps = {
  facet?: string;
  isDisabled?: boolean;
  id?: string;
  hasMappedSourceData?: boolean;
  excludedOptions?: string[];
  onChange: (facet?: string, contents?: Array<UserValueContents>) => void;
};

export const SimpleLookupFilter: FC<SimpleLookupFilterProps> = ({
  facet,
  id,
  onChange,
  hasMappedSourceData,
  isDisabled = false,
  excludedOptions,
}) => {
  const [localValue, setLocalValue] = useState<any[]>();
  const { simpleLookupRef, forceDisplayOptionsAtTheTop } = useSimpleLookupObserver();
  const { options } = useSearchFilterLookupOptions({ facet, hasMappedSourceData, excludedOptions });

  const handleOnChange = (options: MultiValue<FilterLookupOption>) => {
    // TODO: implement the options selection
    const newValue = options.map<UserValueContents>(() => ({}));

    onChange(facet, newValue);
    setLocalValue([...options]);
  };

  // TODO: make the props reusable
  return (
    <CreatableSelect
      id={id}
      ref={simpleLookupRef}
      className="edit-section-field-input simple-lookup"
      classNamePrefix="simple-lookup"
      data-testid="simple-lookup"
      isSearchable
      isClearable
      openMenuOnFocus
      isMulti
      menuPlacement={forceDisplayOptionsAtTheTop ? 'top' : 'auto'}
      components={{ DropdownIndicator, MultiValueRemove, ClearIndicator, Option: OptionMultiline }}
      isDisabled={isDisabled || !SIMPLE_LOOKUPS_ENABLED}
      options={options}
      onChange={handleOnChange as unknown as (newValue: unknown, actionMeta: ActionMeta<unknown>) => void}
      value={localValue}
      placeholder={<FormattedMessage id="marva.select" />}
      inputId="creatable-select-input"
      styles={SimpleLookupFieldStyles as unknown as StylesConfig<unknown, boolean, GroupBase<unknown>>}
      filterOption={createFilter({
        ignoreCase: true,
        ignoreAccents: true,
        matchFrom: 'any',
        trim: true,
        stringify: ({ label }) => label,
      })}
    />
  );
};
