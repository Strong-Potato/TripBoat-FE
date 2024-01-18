import axios from 'axios';

import {postTaglineProps, postVoteTitleProps, VoteListInfo} from '@/types/vote';

//단일vote
export const getVoteInfo = async (voteId: string) => {
  const response = await axios.get(`/api/votes/${voteId}`);
  return response.data.data;
};

//voteList in space
export const getVoteListInfo = async (spaceId: string): Promise<VoteListInfo> => {
  const response = await axios.get(`/api/votes/${spaceId}`);
  return response.data.data;
};

//getVotesResults

//vote 추가
export const PostNewVote = async ({spaceId, title}: postVoteTitleProps): Promise<void> => {
  const response = await axios.post('/api/votes', {params: {spaceId, title}});
  return response.data;
};

//후보 메모 후 추가
export const postTagline = async ({voteId, placeId, tagline}: postTaglineProps) => {
  const response = await axios.post(`/api/votes/${voteId}`, {params: {placeId, tagline}});
  return response.data;
};
