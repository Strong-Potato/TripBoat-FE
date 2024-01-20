import axios from 'axios';

import {EditVoteTitleProps, PostTaglineProps, PostVoteTitleProps, VoteInfo, VoteListInfo} from '@/types/vote';

//단일vote
export const getVoteInfo = async (voteId: number): Promise<VoteInfo> => {
  const response = await axios.get(`/api/votes/${voteId}`);
  return response.data;
};

//voteList in space
export const getVoteListInfo = async (spaceId: number): Promise<VoteListInfo[]> => {
  const response = await axios.get(`/api/votes/${spaceId}`);
  return response.data;
};

//getVotesResults

//vote 추가
export const PostNewVote = async ({spaceId, title}: PostVoteTitleProps) => {
  try {
    const response = await axios.post('/api/votes', {spaceId, title});
    console.log('axios 성공', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

//후보 메모 후 추가
export const postTagline = async ({voteId, placeId, tagline}: PostTaglineProps) => {
  const response = await axios.post(`/api/votes/${voteId}`, {params: {placeId, tagline}});
  return response.data;
};

//voteTitle 수정   //api미정
export const editVoteTitle = async ({title, voteId}: EditVoteTitleProps) => {
  try {
    const response = await axios.put(`/api/votes/${voteId}`, {params: title});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
