import axios from 'axios';

import {EditVoteTitleProps, PostTaglineProps, PostVoteTitleProps, VoteInfo, VoteListInfo} from '@/types/vote';

/* ----------------------------------- G E T ---------------------------------- */
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

/* ----------------------------------- P O S T ---------------------------------- */
//vote 추가
export const PostNewVote = async ({spaceId, title}: PostVoteTitleProps) => {
  try {
    const response = await axios.post('/api/votes', {spaceId, title});
    console.log('axios 포스트 성공', response);
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

/* ----------------------------------- P U T ---------------------------------- */

//voteTitle 수정 PUT  //api미정
export const editVoteTitle = async ({title, voteId}: EditVoteTitleProps) => {
  try {
    const response = await axios.put(`/api/votes/${voteId}`, {params: title});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* ----------------------------------- D E L E T E ---------------------------------- */
//votes/{voteId} vote 삭제 DELETE
export const deleteVote = async (voteId: number) => {
  try {
    const response = await axios.delete(`/api/votes/${voteId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

///votes/{voteId}/candidates candidate메모와 함께 추가 POST

//votes/{voteId}/candidates/{candidatesId} 별 투표하기 POST -> 투표 삭제?

//candidate 삭제 DELETE

//PUT 투표 상태 변경 -> ?
