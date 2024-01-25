import {deleteWishes, getIsWish, postWishes} from '@/api/detail';
import {useSuspenseQuery} from '@tanstack/react-query';
import {useCustomMutation} from '../Votes/vote';

export const useGetIsWish = (id: number, setIsWish: React.Dispatch<React.SetStateAction<boolean>>) => {
  return useSuspenseQuery({
    queryKey: ['isWish', id],
    queryFn: () => getIsWish(id, setIsWish),
  });
};

export const usePostWishes = () => {
  return useCustomMutation(postWishes, ['isWish']);
};

export const useDeleteWishes = () => {
  return useCustomMutation(deleteWishes, ['isWish']);
};
