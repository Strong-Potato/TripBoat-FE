import {atom} from 'recoil';

import {TaglineType} from '@/types/vote';

export const selectedTaglineState = atom<TaglineType[]>({
  key: 'selectedTaglineState',
  default: [],
});
