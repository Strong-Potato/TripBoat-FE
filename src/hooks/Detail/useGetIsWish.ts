import {getIsWish} from '@/api/detail';
import {useSuspenseQuery} from '@tanstack/react-query';

export const useGetIsWish = (id: number, setIsWish: React.Dispatch<React.SetStateAction<boolean>>) => {
  return useSuspenseQuery({
    queryKey: ['isWish', id],
    queryFn: () => getIsWish(id, setIsWish),
  });
};
