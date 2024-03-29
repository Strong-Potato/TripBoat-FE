import {atom} from 'recoil';

export const activeTabIndexState = atom<number>({
  key: 'activeTabIndexState',
  default: 0,
});

export const isPassedState = atom<boolean>({
  key: 'isPassedState',
  default: false,
});
