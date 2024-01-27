import {atom} from 'recoil';

import {SelectedPlaces} from '@/components/Route/AddPlace/FromVote/VoteCard/VoteCard';

export const selectedPlaceFromVoteState = atom<SelectedPlaces[]>({
  key: 'selectedPlaceFromVoteState',
  default: [],
});
