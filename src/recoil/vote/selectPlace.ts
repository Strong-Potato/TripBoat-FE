import {atom} from 'recoil';

import {SearchItemType} from '@/types/home';

export const selectedPlaceState = atom<SearchItemType[]>({
  key: 'selectedPlaceState',
  default: [],
});
