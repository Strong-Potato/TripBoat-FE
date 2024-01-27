import {useMutation, useQueryClient, useSuspenseQuery} from '@tanstack/react-query';

import {
  deletePlaces,
  getJourneys,
  getRecentSpace,
  getRegions,
  getSpace,
  postPlaces,
  putDates,
  putExitSpace,
  putPlaces,
  putRegions,
} from '@/api/spaces';

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

// [GET] 여행 일정 조회
export const useGetJourneys = (spaceId: number) => {
  return useSuspenseQuery({
    queryKey: ['spaces', spaceId, 'journeys'],
    queryFn: () => getJourneys(spaceId),
  });
};

// [POST] 일정 추가
export const usePostPlaces = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postPlaces,
    onSuccess: () => {
      return queryClient.invalidateQueries({queryKey: ['spaces', 'places']});
    },
  });
};

// [PUT] 일정 수정
export const usePutPlaces = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putPlaces,
    onSuccess: () => {
      return queryClient.invalidateQueries({queryKey: ['spaces', 'places']});
    },
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

// [PUT] 여행 나가기
export const usePutExitSpace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putExitSpace,
    onSuccess: () => {
      return queryClient.invalidateQueries({queryKey: ['spaces', 'exit']});
    },
  });
};

// [DELETE] 일정 삭제
export const useDeletePlaces = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePlaces,
    onSuccess: () => {
      return queryClient.invalidateQueries({queryKey: ['spaces', 'places']});
    },
  });
};
