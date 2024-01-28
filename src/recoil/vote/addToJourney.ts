import {atom} from 'recoil';

import {Journeys} from '@/types/route';

export const journeyState = (spaceId: number) =>
  atom<Journeys>({
    key: `journeyState_${spaceId}`,
    default: {
      journeys: [],
    },
  });
