import {atom} from 'recoil';

export const isCreateModalOpenState = atom<boolean>({
  key: 'isCreateModalOpenState',
  default: false,
});
