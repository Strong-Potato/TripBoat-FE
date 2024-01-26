import axios from 'axios';

import {
  DeleteCandidatesProps,
  EditVoteTitleProps,
  PostNewCandidateProps,
  PostVoteTitleProps,
  PostVotingProps,
  VoteInfoRes,
} from '@/types/vote';

/* ----------------------------------- G E T ---------------------------------- */

//단일 보트
export const getVoteInfo = async (voteId: number): Promise<VoteInfoRes> => {
  const response = await axios.get(`/api/votes/${voteId}`, {withCredentials: true});
  return response.data;
};

//보트 리스트
export const getVoteListInfo = async (spaceId: number) => {
  const response = await axios.get(`/api/votes`, {params: {spaceId, voteStatusOption: 'ALL', withCredentials: true}});
  return response.data;
};

//투표 결과 조회
export const getVoteResults = async (voteId: number) => {
  const response = await axios.get(`/api/votes/${voteId}/result`, {withCredentials: true});
  return response.data;
};

/* ----------------------------------- P O S T ---------------------------------- */

//vote 추가
export const postNewVote = async ({spaceId, title}: PostVoteTitleProps) => {
  try {
    const response = await axios.post('/api/votes', {spaceId, title});
    console.log('axios 포스트 성공', response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//투표하기&취소
export const postVoting = async ({voteId, candidateId}: PostVotingProps) => {
  try {
    const response = await axios.post('/api/votes/voting', {voteId, candidateId});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//후보 메모 후 추가
export const postNewCandidate = async ({voteId, candidateInfos}: PostNewCandidateProps) => {
  const response = await axios.post(`/api/votes/${voteId}/candidates`, {candidateInfos, withCredentials: true});
  return response.data;
};

/* ----------------------------------- P U T ---------------------------------- */

//voteTitle 수정 PUT - api미정
export const editVoteTitle = async ({title, voteId}: EditVoteTitleProps) => {
  try {
    const response = await axios.put(`/api/votes/${voteId}`, {params: {title, withCredentials: true}});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//투표 상태 결과보기/진행중 변경
export const changeStatus = async (voteId: number) => {
  try {
    const response = await axios.put(`/api/votes/${voteId}/voteStatus`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//재투표, 리셋
export const resetShowResults = async (voteId: number) => {
  try {
    const response = await axios.put(`/api/votes/${voteId}/reset`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/* ----------------------------------- D E L E T E ---------------------------------- */

//votes/{voteId} vote 삭제
export const deleteVote = async (voteId: number) => {
  try {
    const response = await axios.delete(`/api/votes/${voteId}/voteStatus`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//candidate 삭제- api 미정 / candidateId:number[] 여러아이디 배열에 담음 -> params 빼면 에러
export const deleteCandidates = async ({voteId, candidateIds}: DeleteCandidatesProps) => {
  try {
    const response = await axios.delete(`/api/votes/${voteId}/candidates`, {
      params: {candidateIds, withCredentials: true},
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
