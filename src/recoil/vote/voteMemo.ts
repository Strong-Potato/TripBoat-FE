import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';
const {persistAtom} = recoilPersist();
import {TaglineType} from '@/types/vote';

export const selectedTaglineState = atom<TaglineType[]>({
  key: 'selectedTaglineState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
