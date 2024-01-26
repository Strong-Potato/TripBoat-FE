import {useMutation, useQuery, useQueryClient, useSuspenseQuery} from '@tanstack/react-query';

import {
  changeStatus,
  deleteCandidates,
  deleteVote,
  editVoteTitle,
  getVoteInfo,
  getVoteListInfo,
  getVoteResults,
  postNewCandidate,
  postNewVote,
  postVoting,
  resetShowResults,
} from '@/api/vote';

/* ----------------------------------- Q U E R Y ---------------------------------- */

//단일 보트 GET
export const useGetVotesInfo = (voteId: number) => {
  return useQuery({
    queryKey: ['vote', voteId],
    queryFn: () => getVoteInfo(voteId),
    retry: false,
  });
};

//보트 리스트 GET
export const useGetVoteListInfo = (spaceId: number) => {
  return useQuery({
    queryKey: ['votes', spaceId],
    queryFn: () => getVoteListInfo(spaceId),
    retry: false,
  });
};

//결과보기 GET
export const useGetVotesResults = (voteId: number) => {
  return useSuspenseQuery({
    queryKey: ['votes', voteId],
    queryFn: () => getVoteResults(voteId),
    retry: false,
  });
};

/* ----------------------------------- M U T A T I O N ---------------------------------- */

//커스텀 mutation
export const useCustomMutation = <TData = unknown, TError = unknown, TVariables = undefined>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  queryKey: string[],
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn,
    onSuccess: () => queryClient.invalidateQueries({queryKey}),
    onError: (error: TError) => {
      console.error('Mutation error:', error);
    },
    retry: false,
  });
};

//vote 추가 POST
export const usePostNewVote = () => {
  return useCustomMutation(postNewVote, ['votes']);
};

//투표하기&취소 POST --
export const usePostVoting = () => {
  return useCustomMutation(postVoting, ['vote', 'candidates']); //vote?
};

//후보 메모 후 추가 POST
export const usePostNewCandidate = () => {
  return useMutation({mutationFn: postNewCandidate}); //onSuccess?
};

//voteTitle 수정 PATCH
export const useEditVoteTitle = () => {
  return useCustomMutation(editVoteTitle, ['vote']);
};

//투표 상태 결정완료/진행중 변경 PUT
export const useChangeStatus = () => {
  return useCustomMutation(changeStatus, ['vote']);
};

//결과보기 취소 --
export const useResetShowResults = () => {
  return useCustomMutation(resetShowResults, ['vote']);
};

// //vote 삭제 DELETE
export const useDeleteVote = () => {
  return useMutation({mutationFn: deleteVote});
};

// //candidate 삭제
export const useDeleteCandidates = () => {
  return useCustomMutation(deleteCandidates, ['vote']);
};

//커스텀 mutation 사용 전
