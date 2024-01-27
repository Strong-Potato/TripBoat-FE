import {atom} from 'recoil';

import {SelectedPlaces} from '@/components/Route/AddPlace/FromVote/VoteCard/VoteCard';

import {PlaceList} from '@/types/route';

export const selectedPlaceFromVoteState = atom<SelectedPlaces[]>({
  key: 'selectedPlaceFromVoteState',
  default: [],
});

interface editedPlaceSate {
  journeyId: number;
  placeCards: PlaceList[];
}

export const editedPlacesState = atom<editedPlaceSate>({
  key: 'editedPlacesState',
  default: {
    journeyId: 0,
    placeCards: [],
  },
});
