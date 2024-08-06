import { useRecoilValue } from 'recoil';
import { formatItemSearchComplexLookupAuthority } from '@common/helpers/search.helper';
import { Row, Table } from '@components/Table';
import state from '@state';
import { Button, ButtonType } from '@components/Button';
import { FormattedMessage } from 'react-intl';

const listHeader: Row = {
  title: {
    label: <FormattedMessage id="marva.title" />,
    position: 0,
  },
  subclass: {
    label: <FormattedMessage id="marva.subclass" />,
    position: 1,
  },
  source: {
    label: <FormattedMessage id="marva.source" />,
    position: 2,
  },
  lccn: {
    label: <FormattedMessage id="marva.lccn" />,
    position: 3,
  },
  assign: {
    label: '',
    position: 4,
  },
};

export const ComplexLookupSearchResults = () => {
  const data = useRecoilValue(state.search.data);

  const applyActionItems = (rows: Row[]): Row[] =>
    rows.map(row => ({
      ...row,
      title: {
        ...row.title,
        children: (
          <div className="search-result-cell-content">
            <Button type={ButtonType.Link} onClick={() => null}>
              {row.title.label}
            </Button>
          </div>
        ),
      },
      assign: {
        children: (
          <Button type={ButtonType.Primary} onClick={() => null}>
            Assign
          </Button>
        ),
      },
    }));

  const formattedData = applyActionItems(formatItemSearchComplexLookupAuthority(data || []));

  return (
    <div className="search-result-list">
      <Table header={listHeader} data={formattedData} className="results-list" />
    </div>
  );
};