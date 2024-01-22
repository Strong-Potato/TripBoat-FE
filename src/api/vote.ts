import axios from 'axios';

import {
  DeleteCandidatesProps,
  EditVoteTitleProps,
  PostNewCandidateProps,
  PostVoteTitleProps,
  VoteInfo,
  VoteListInfo,
} from '@/types/vote';

/* ----------------------------------- G E T ---------------------------------- */

//단일 보트
export const getVoteInfo = async (voteId: number): Promise<VoteInfo> => {
  const response = await axios.get(`/api/votes/${voteId}`);
  return response.data;
};

//보트 리스트
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
export const postNewCandidate = async ({voteId, candidates}: PostNewCandidateProps) => {
  const response = await axios.post(`/api/votes/${voteId}`, {params: candidates});
  return response.data;
};

/* ----------------------------------- P U T ---------------------------------- */

//voteTitle 수정 PUT - api미정
export const editVoteTitle = async ({title, voteId}: EditVoteTitleProps) => {
  try {
    const response = await axios.put(`/api/votes/${voteId}`, {params: title});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* ----------------------------------- D E L E T E ---------------------------------- */

//votes/{voteId} vote 삭제
export const deleteVote = async (voteId: number) => {
  try {
    const response = await axios.delete(`/api/votes/${voteId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//msw 돌려야함
//candidate 삭제- api 미정 / candidateId:number[] 여러아이디 배열에 담음
export const deleteCandidates = async ({voteId, candidateId}: DeleteCandidatesProps) => {
  try {
    const response = await axios.delete(`/api/votes/${voteId}/candidates/${candidateId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

///votes/{voteId}/candidates candidate메모와 함께 추가 POST

//votes/{voteId}/candidates/{candidatesId} 별 투표하기 POST -> + DELETE 투표 삭제?

//PUT 투표 상태 변경(재진행) -> ?
