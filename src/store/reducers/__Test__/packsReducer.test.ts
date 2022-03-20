import {
  setMaxCardsCountAC,
  setMinCardsCountAC,
  setCurrentPagePacksAC,
  setPacksAC,
  setPageCountPacksAC,
  setSearchPack,
  setSortPacks,
} from 'store/actions';
import { packsReducer, InitialStateType } from 'store/reducers/packsReducer';
import { PacksType, PackType } from 'types';

let initialState: InitialStateType;
let packs: PacksType;
let cards: PackType[];
let sort: string;
let searchPack: string;
const currentPage: number = 10; // Magic number must be here, not into beForeEach
const pageCount: number = 100;
const minCards: number = 12;
const maxCards: number = 111;

beforeEach(() => {
  initialState = {
    packs: {} as PacksType,
    sort: '',
    searchPack: '',
    isMyPack: false,
    flagForRerender: ['remind'],
    localMinRage: 0,
    localMaxRage: 0,
  };

  cards = [
    {
      cardsCount: 1,
      created: 'alive',
      grade: 2,
      more_id: 'once',
      name: 'pardon',
      path: 'journey',
      private: false,
      rating: 3,
      shots: 4,
      type: 'please',
      updated: 'long',
      user_id: 'red',
      user_name: 'narrow',
      __v: 5,
      _id: 'put',
    },
  ];

  packs = {
    cardPacks: cards,
    cardPacksTotalCount: 10,
    maxCardsCount: 11,
    minCardsCount: 12,
    page: 13,
    pageCount: 20,
    token: 'advance',
    tokenDeathTime: 21,
  };
  sort = 'fame';
  searchPack = 'page';
});

test('set Cards from API', () => {
  const action = setPacksAC(packs);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs).toBe(packs);
  expect(endState.packs.cardPacks).toBe(cards);
});

test('change sort value for cards', () => {
  const action = setSortPacks(sort);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.sort).toBe(sort);
});

test('set value for search pack', () => {
  const action = setSearchPack(searchPack);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.searchPack).toBe(searchPack);
});

test('set current page', () => {
  const action = setCurrentPagePacksAC(currentPage);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs.page).toBe(currentPage);
});

test('set page count', () => {
  const action = setPageCountPacksAC(pageCount);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs.pageCount).toBe(pageCount);
});

// SET_IS_MY_PACK

// RERENDER_PACK

test('set min cards count', () => {
  const action = setMinCardsCountAC(minCards);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs.minCardsCount).toBe(minCards);
});

test('set min cards count', () => {
  const action = setMaxCardsCountAC(maxCards);

  const endState = packsReducer(initialState, action);

  expect(endState).not.toBe(initialState);
  expect(endState.packs.maxCardsCount).toBe(maxCards);
});
