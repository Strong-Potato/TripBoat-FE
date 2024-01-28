import {atom} from 'recoil';

export const activeTabIndexState = atom<number>({
  key: 'activeTabIndexState',
  default: 0,
});
