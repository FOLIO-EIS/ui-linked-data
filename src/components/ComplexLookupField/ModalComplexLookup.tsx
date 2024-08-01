import { FC, memo, useCallback } from 'react';
import { SEARCH_API_ENDPOINT } from '@common/constants/api.constants';
import { Modal } from '@components/Modal';
import { Search } from '@components/Search';
import { SearchControlPane } from '@components/SearchControlPane';
import { filters } from './data/filters';
import './ModalComplexLookup.scss';

interface ModalComplexLookupProps {
  isOpen: boolean;
  onClose: VoidFunction;
  title?: string;
  searchPaneTitle?: string;
}

export const ModalComplexLookup: FC<ModalComplexLookupProps> = memo(
  ({ isOpen, onClose, title = '', searchPaneTitle = '' }) => {
    const renderSearchControlPane = useCallback(() => <SearchControlPane label={searchPaneTitle} />, []);
    // TODO: create a component
    const renderResultsList = useCallback(() => <div />, []);

    return (
      <Modal
        isOpen={isOpen}
        title={title}
        onClose={onClose}
        titleClassName="modal-complex-lookup-title"
        showModalControls={false}
        className="modal-complex-lookup"
        classNameHeader="modal-complex-lookup-header"
      >
        <div className="complex-lookup-search-contents" data-testid="complex-lookup-search-contents">
          <Search
            // TODO: Extend the profile with the endpoint and use it here
            endpointUrl={`${SEARCH_API_ENDPOINT}/authorities`}
            isSortedResults={false}
            filters={filters}
            hasSearchParams={false}
            defaultSearchBy={'label' as SearchIdentifiers}
            renderSearchControlPane={renderSearchControlPane}
            renderResultsList={renderResultsList}
            isVisibleFilters={true}
            isVisibleFullDisplay={false}
            isVisibleAdvancedSearch={false}
            isVisibleSearchByControl={false}
            labelEmptySearch="marva.searchNoComplexLookupsMatch"
            classNameEmptyPlaceholder="complex-lookup-search-empty"
          />
        </div>
      </Modal>
    );
  },
);
