import { FC, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import LeftIcon from '@src/assets/chevron-left.svg?react';
import RightIcon from '@src/assets/chevron-right.svg?react';
import './Pagination.scss';

export type Props = {
  currentPage?: number;
  totalPages?: number;
  pageSize?: number;
  resultsCount?: number;
  totalResultsCount?: number;
  onPrevPageClick: VoidFunction;
  onNextPageClick: VoidFunction;
};

export const Pagination: FC<Props> = memo(
  ({ currentPage = 0, totalPages = 0, pageSize = 0, totalResultsCount = 0, onPrevPageClick, onNextPageClick }) => {
    const isDisabledPrev = currentPage === 0;
    const isDisabledNext = totalPages ? currentPage === totalPages - 1 : false;
    const startCount = currentPage === 0 ? 1 : currentPage * pageSize + 1;
    const pageNumber = currentPage + 1;
    let endCount;

    if (totalPages === 1) {
      endCount = totalResultsCount;
    } else if (pageNumber === totalPages) {
      endCount = startCount - 1 + totalResultsCount - currentPage * pageSize;
    } else {
      endCount = pageNumber * pageSize;
    }

    return (
      <div className="pagination" data-testid="pagination">
        <button
          onClick={onPrevPageClick}
          disabled={isDisabledPrev}
          className="pagination-button"
          data-testid="backward-button"
        >
          <LeftIcon />
        </button>
        <div>
          <FormattedMessage id="marva.pagination.count" values={{ startCount, endCount, totalResultsCount }} />
        </div>
        <button
          onClick={onNextPageClick}
          disabled={isDisabledNext}
          className="pagination-button"
          data-testid="forward-button"
        >
          <RightIcon />
        </button>
      </div>
    );
  },
);
