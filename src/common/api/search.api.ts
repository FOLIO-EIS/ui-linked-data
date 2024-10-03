import { SEARCH_RESULTS_LIMIT } from '@common/constants/search.constants';
import baseApi from './base.api';

export type ItemSearchResponse = {
  searchQuery: string;
  content: WorkAsSearchResultDTO[];
};

export type GetByIdentifier = {
  endpointUrl: string;
  searchFilter?: string;
  isSortedResults?: boolean;
  searchBy?: string;
  query: string;
  offset?: string;
  limit?: string;
};

export const getByIdentifier = async ({
  endpointUrl,
  searchFilter,
  isSortedResults = true,
  searchBy,
  query,
  offset = '0',
  limit = SEARCH_RESULTS_LIMIT.toString(),
}: GetByIdentifier) => {
  const sortQuery = isSortedResults ? ' sortby title' : '';
  const filterQuery = searchFilter ? ` and ${searchFilter}` : '';
  const urlParams: Record<string, string> | undefined = {
    query: searchBy ? `(${searchBy} all "${query}")${sortQuery}${filterQuery}` : `${query}${sortQuery}${filterQuery}`,
    offset,
    limit,
  };

  return await baseApi.getJson({ url: endpointUrl, urlParams });
};

// TODO: generate search params
export const getSearchData = (url?: string, urlParams?: Record<string, string>) => {
  if (!url) return;

  return baseApi.getJson({ url, urlParams });
};

export const getSearchResults = async (params: Record<string, string | number>) => {
  const { endpointUrl, query, offset = '0', limit = SEARCH_RESULTS_LIMIT.toString(), resultsContainer } = params;

  // TODO: generate search params
  const queryParam = `(keyword=="${query}" or naturalId="${query}")`;

  const urlParams: Record<string, string> | undefined = {
    query: queryParam,
    offset: offset?.toString(),
    limit: limit?.toString(),
  };

  const result = await baseApi.getJson({ url: endpointUrl as string, urlParams });

  return {
    content: result.content ?? result[resultsContainer],
    totalRecords: result.totalRecords,
    totalPages: result.totalPages ?? Math.ceil(result?.totalRecords / 100),
  };
};
