import {atom} from 'recoil';

export const isFullMember = atom<boolean>({
  key: 'isFullMember',
  default: false,
});
