import {atom} from 'recoil';

export const isShowResultsState = (voteId: number) =>
  atom({
    key: `isShowResultsState_${voteId}`,
    default: false,
  });

export const showResultIdsState = atom<number[]>({
  key: 'showResultIdsState',
  default: [],
});

export const isVotedState = atom({
  key: 'isVotedState',
  default: false,
});
