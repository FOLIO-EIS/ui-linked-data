import { FC } from 'react';
import { SearchContext } from '@common/contexts';

type SearchProviderProps = {
  value: SearchContextValue;
  children: ReactElement;
};

export const SearchProvider: FC<SearchProviderProps> = ({ value, children }) => {
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};