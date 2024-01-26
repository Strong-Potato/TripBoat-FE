import {useSuspenseQuery} from '@tanstack/react-query';

import {deleteWishes, getIsWish, postWishes} from '@/api/detail';

import {useCustomMutation} from '../Votes/vote';

export const useGetIsWish = (id: number) => {
  return useSuspenseQuery({
    queryKey: ['isWish', id],
    queryFn: () => getIsWish(id),
  });
};

export const usePostWishes = () => {
  return useCustomMutation(postWishes, ['isWish']);
};

export const useDeleteWishes = () => {
  return useCustomMutation(deleteWishes, ['isWish']);
};
