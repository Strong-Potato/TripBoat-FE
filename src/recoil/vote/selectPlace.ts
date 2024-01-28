import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';
const {persistAtom} = recoilPersist();
import {SearchItemType} from '@/types/home';

export const selectedPlaceState = atom<SearchItemType[]>({
  key: 'selectedPlaceState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const selectedTripPlaceState = atom<number[]>({
  key: 'selectedTripPlaceState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const selectedTripSearchPlaceState = atom<{placeId: number; contentTypeId: number}[]>({
  key: 'selectedTripSearchPlaceState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
