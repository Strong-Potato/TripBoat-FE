import {atom} from 'recoil';

import {PlaceInfo} from '@/types/vote';

export const selectedPlaceState = atom<PlaceInfo[]>({
  key: 'selectedPlaceState',
  default: [],
});
