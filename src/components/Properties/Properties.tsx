import { useRecoilValue } from 'recoil';
import { GROUP_BY_LEVEL } from '@common/constants/bibframe.constants';
import { AdvancedFieldType } from '@common/constants/uiControls.constants';
import state from '@state';
import { Fields, IDrawComponent } from '../Fields';
import './Properties.scss';
import { FormattedMessage } from 'react-intl';

export const Properties = () => {
  const schema = useRecoilValue(state.config.schema);
  const initialSchemaKey = useRecoilValue(state.config.initialSchemaKey);

  if (!schema.size) {
    return null;
  }

  const drawComponent = ({ entry: { displayName, type, uuid }, level = 0 }: IDrawComponent) => {
    if (level <= GROUP_BY_LEVEL && type !== AdvancedFieldType.profile) {
      if (type === AdvancedFieldType.block) {
        return <strong>{displayName}</strong>;
      } else {
        return (
          <div onClick={() => document.getElementById(uuid)?.scrollIntoView({ behavior: 'smooth' })}>{displayName}</div>
        );
      }
    }

    return null;
  };

  return (
    <div className="properties">
      <h3>
        <FormattedMessage id='marva.properties' />
      </h3>
      <Fields schema={schema} uuid={initialSchemaKey} drawComponent={drawComponent} groupClassName="group" />
    </div>
  );
};
