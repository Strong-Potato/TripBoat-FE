import {useMutation, useQuery, useQueryClient, useSuspenseQuery} from '@tanstack/react-query';

import {
  changeStatusComplete,
  deleteCandidates,
  deleteVote,
  editVoteTitle,
  getVoteInfo,
  getVoteListInfo,
  getVoteResults,
  postNewCandidate,
  postNewVote,
  postVoting,
  resetVoteStatus,
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

//투표하기&취소 POST
export const usePostVoting = () => {
  return useCustomMutation(postVoting, ['vote', 'candidates']); //vote?
};

//후보 메모 후 추가 POST
export const usePostNewCandidate = () => {
  return useMutation({mutationFn: postNewCandidate}); //onSuccess?
};

// //voteTitle 수정 PUT
export const useEditVoteTitle = () => {
  return useCustomMutation(editVoteTitle, ['vote']);
};

//투표 상태 결과보기로 변경 PUT
export const useChangeStatusComplete = () => {
  return useCustomMutation(changeStatusComplete, ['vote']);
};

//재투표, 리셋
export const useResetVoteStatus = () => {
  return useCustomMutation(resetVoteStatus, ['vote']);
};

// //vote 삭제 DELETE  -> 쿼리 무효화 필요없는지 확인하기
export const useDeleteVote = () => {
  return useMutation({mutationFn: deleteVote});
};

// //candidate 삭제- api 미정
export const useDeleteCandidates = () => {
  return useCustomMutation(deleteCandidates, ['votes']);
};

//커스텀 mutation 사용 전

//vote 추가 POST
// export const usePostNewVote = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: PostNewVote,
//     onSuccess: () =>  queryClient.invalidateQueries({queryKey: ['votes']});
//   });
// };

//voteTitle 수정 PUT
// export const useEditVoteTitle = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: editVoteTitle,
//     onSuccess: () => {
//       queryClient.invalidateQueries({queryKey: ['vote']});
//     },
//   });
// };

//vote 삭제 DELETE
// export const useDeleteVote = () => {
//   const queryClient = useQueryClient();
//   return useMutation({
//     mutationFn: deleteVote,
//     onSuccess: () => {
//       queryClient.invalidateQueries({queryKey: ['votes']});
//     },
//   });
// };
