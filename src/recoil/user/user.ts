import {atom} from 'recoil';

export const Subcribe = atom<boolean>({
  key: 'isSubscribe',
  default: false,
});
