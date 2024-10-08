export const ROUTES = {
  MAIN: {
    uri: '/',
    name: 'ld.main',
  },
  DASHBOARD: {
    uri: '/dashboard',
    name: 'ld.dashboard',
  },
  SEARCH: {
    uri: '/search',
    name: 'ld.searchResource',
  },
  RESOURCE_CREATE: {
    uri: '/resources/create',
    name: 'ld.create',
  },
  RESOURCE_EDIT: {
    uri: '/resources/:resourceId/edit',
    name: 'ld.editResource',
  },
  EXTERNAL_RESOURCE_EDIT: {
    uri: '/resources/external/:resourceId/edit',
    name: 'ld.externalResource',
  },
};

export const RESOURCE_URLS = [ROUTES.RESOURCE_EDIT.uri];

export const RESOURCE_EDIT_CREATE_URLS = [ROUTES.RESOURCE_EDIT.uri, ROUTES.RESOURCE_CREATE.uri];

export const RESOURCE_CREATE_URLS = [ROUTES.RESOURCE_CREATE.uri];

export const FIXED_HEIGHT_VIEWS = [ROUTES.SEARCH.uri];

export enum QueryParams {
  Type = 'type',
  Ref = 'ref',
  CloneOf = 'cloneOf',
}

export enum SearchQueryParams {
  Query = 'query',
  SearchBy = 'searchBy',
  Offset = 'offset',
}

export enum ForceNavigateToDest {
  EditPage = 'editPage',
  CreatePage = 'createPage',
  CreatePageAsClone = 'createPageAsClone',
}
