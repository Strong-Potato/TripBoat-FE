import {useMutation, useQueryClient, useSuspenseQuery} from '@tanstack/react-query';

import {deleteCandidates, deleteVote, editVoteTitle, getVoteInfo, getVoteListInfo, PostNewVote} from '@/api/vote';

/* ----------------------------------- Q U E R Y ---------------------------------- */

//단일 보트 GET
export const useGetVotesInfo = (voteId: number) => {
  return useSuspenseQuery({
    queryKey: ['vote', voteId],
    queryFn: () => getVoteInfo(voteId),
  });
};

//보트 리스트 GET
export const useGetVoteListInfo = (spaceId: number) => {
  return useSuspenseQuery({
    queryKey: ['votes', spaceId],
    queryFn: () => getVoteListInfo(spaceId),
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
  });
};

//vote 추가 POST
export const usePostNewVote = () => {
  return useCustomMutation(PostNewVote, ['votes']);
};

//voteTitle 수정 PUT
export const useEditVoteTitle = () => {
  return useCustomMutation(editVoteTitle, ['vote']);
};

//vote 삭제 DELETE  -> 쿼리 무효화 필요없는지 확인하기
export const useDeleteVote = () => {
  return useCustomMutation(deleteVote, ['votes']);
};

//candidate 삭제- api 미정
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
