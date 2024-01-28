import {atom} from 'recoil';

import {Journeys} from '@/types/route';

export const journeyState = atom<Journeys>({
  key: 'journeyState',
  default: {
    journeys: [],
  },
});
