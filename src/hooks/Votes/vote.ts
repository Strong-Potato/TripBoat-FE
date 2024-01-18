import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

import {PostNewVote} from '@/api/vote';
import {getVoteInfo} from '@/mocks/handlers/vote';

import {postVoteTitleProps} from './../../types/vote';

// export const useAccommodationInfoQuery = () => {
//   return useQuery({
//     queryKey: [],
//     queryFn:
//   });
// };

// export const usePostCart = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn:
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["fetchCarts"] });
//       setTimeout(() => setIsButtonDisabled(false), 3000);
//     },
//   });
// };

export const useGetVotesInfoQuery = (voteId: string) => {
  return useQuery({
    queryKey: ['votes', voteId],
    queryFn: () => getVoteInfo(voteId),
  });
};

export const usePostVoteTitle = ({spaceId, title}: postVoteTitleProps) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => PostNewVote({spaceId, title}),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['votes']});
    },
  });
};

// const { mutateAsync } = useMutation(updateData);

// // 비동기 함수를 직접 호출하지 않음
// const handleUpdate = async () => {
//   await mutateAsync();
// };
