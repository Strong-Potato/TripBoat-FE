import {atom} from 'recoil';

export const showResultsState = atom({
  key: 'showResultsState',
  default: false,
});

export const showResultIdsState = atom<number[]>({
  key: 'showResultIdsState',
  default: [],
});
