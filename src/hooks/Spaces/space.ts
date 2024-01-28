import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

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
  return useQuery({
    queryKey: ['spaces', 'city'],
    queryFn: () => getRegions(),
  });
};

// [GET] 단일 여행 스페이스 조회
export const useGetSpace = (spaceId: number) => {
  return useQuery({
    queryKey: ['spaces', spaceId],
    queryFn: () => getSpace(spaceId),
  });
};

// [GET] 최근 여행 스페이스 조회
export const useGetRecentSpace = () => {
  return useQuery({
    queryKey: ['spaces', 'recent'],
    queryFn: () => getRecentSpace(),
  });
};

// [GET] 여행 일정 조회
export const useGetJourneys = (spaceId: number) => {
  return useQuery({
    queryKey: ['spaces', spaceId, 'journey', 'places'],
    queryFn: () => getJourneys(spaceId),
  });
};

// [POST] 일정 추가
export const usePostPlaces = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postPlaces,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['spaces']});
      queryClient.invalidateQueries({queryKey: ['journey']});
      queryClient.invalidateQueries({queryKey: ['places']});
    },
  });
};

// [PUT] 일정 수정
export const usePutPlaces = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putPlaces,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['spaces']});
      queryClient.invalidateQueries({queryKey: ['journey']});
      queryClient.invalidateQueries({queryKey: ['places']});
    },
  });
};

// [PUT] 날짜 선택
export const usePutRegions = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putRegions,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['spaces']});
      queryClient.invalidateQueries({queryKey: ['region']});
    },
  });
};

// [PUT] 지역 선택
export const usePutDates = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putDates,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['spaces']});
      queryClient.invalidateQueries({queryKey: ['date']});
    },
  });
};

// [PUT] 여행 나가기
export const usePutExitSpace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: putExitSpace,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['spaces']});
      queryClient.invalidateQueries({queryKey: ['exit']});
    },
  });
};

// [DELETE] 일정 삭제
export const useDeletePlaces = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePlaces,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['spaces']});
      queryClient.invalidateQueries({queryKey: ['journey']});
      queryClient.invalidateQueries({queryKey: ['places']});
    },
  });
};
