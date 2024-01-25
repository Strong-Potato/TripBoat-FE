import {useMutation, useQueryClient, useSuspenseQuery} from '@tanstack/react-query';

import {getRecentSpace, getRegions, getSpace, putDates, putRegions} from '@/api/spaces';

// [GET] 지역 리스트 조회
export const useGetRegions = () => {
  return useSuspenseQuery({
    queryKey: ['spaces', 'city'],
    queryFn: () => getRegions(),
  });
};

// [GET] 단일 여행 스페이스 조회
export const useGetSpace = (spaceId: number) => {
  return useSuspenseQuery({
    queryKey: ['spaces', spaceId],
    queryFn: () => getSpace(spaceId),
  });
};

// [GET] 최근 여행 스페이스 조회
export const useGetRecentSpace = () => {
  return useSuspenseQuery({
    queryKey: ['spaces', 'recent'],
    queryFn: () => getRecentSpace(),
  });
};

// [PUT] 날짜 선택
export const usePutRegions = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putRegions,
    onSuccess: () => {
      return queryClient.invalidateQueries({queryKey: ['spaces', 'region']});
    },
  });
};

// [PUT] 지역 선택
export const usePutDates = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putDates,
    onSuccess: () => {
      return queryClient.invalidateQueries({queryKey: ['spaces', 'date']});
    },
  });
};
