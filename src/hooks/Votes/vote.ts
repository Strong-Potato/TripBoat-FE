import {useMutation, useQueryClient, useSuspenseQuery} from '@tanstack/react-query';

import {getVoteInfo, getVoteListInfo, PostNewVote} from '@/api/vote';

//단일 보트 GET
export const useGetVotesInfo = (voteId: number) => {
  return useSuspenseQuery({
    queryKey: ['votes', voteId],
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

export const usePostNewVote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostNewVote,
    onSuccess: (data) => {
      console.log('투표 만들기 성공:', data), queryClient.invalidateQueries({queryKey: ['votes']});
    },
  });
};
