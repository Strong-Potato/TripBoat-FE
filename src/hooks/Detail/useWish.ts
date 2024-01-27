import {useQuery} from '@tanstack/react-query';

import {deleteWishes, getIsWish, postWishes} from '@/api/detail';

import {useCustomMutation} from '../Votes/vote';

export const useGetIsWish = (id: number, enabled: boolean) => {
  return useQuery({
    // 키 동적으로 바뀌게 바꾸어놨습니다!
    queryKey: [`wish ${id}`],
    enabled,
    queryFn: () => getIsWish(id),
  });
};

export const usePostWishes = (id: number) => {
  return useCustomMutation(postWishes, [`wish ${id}`]);
};

export const useDeleteWishes = (id: number) => {
  return useCustomMutation(deleteWishes, [`wish ${id}`]);
};
