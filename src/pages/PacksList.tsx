import { ReactElement, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { TableCardsPack, SearchField } from 'components';
import { setSearchPack } from 'store/actions';
import { selectCurrentPage, selectPageCount, selectSortPacks, selectSearchPack } from 'store/selectors';
import { getCardsTC } from 'store/thunks';

export const PacksList = (): ReactElement => {
  const dispatch = useDispatch();

  const sortPacks = useSelector(selectSortPacks);
  const searchPack = useSelector(selectSearchPack);

  const searchValue = (value: string): void => {
    dispatch(setSearchPack(value));
  };
  const currentPage = useSelector(selectCurrentPage);
  const pagesCount = useSelector(selectPageCount);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    dispatch(getCardsTC(searchPack, 0, 0, sortPacks, pagesCount, currentPage));
  }, [sortPacks, searchPack]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SearchField searchValue={searchValue} />
      <TableCardsPack />
      {searchPack}
    </div>
  );
};
