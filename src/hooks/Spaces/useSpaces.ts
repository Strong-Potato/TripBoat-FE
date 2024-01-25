import {useInfiniteQuery, useMutation, useQuery, useQueryClient} from '@tanstack/react-query';

import {spacesRequest} from '@/api/spaces';

function useGetSpaces(enabled: boolean) {
  return useQuery({
    queryKey: ['spaces'],
    queryFn: spacesRequest.getUpcoming,
    enabled,
  });
}

function useGetSpacesOut() {
  return useInfiniteQuery({
    queryKey: ['spacesOut'],
    queryFn: spacesRequest.getOutdated,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}

function usePostSpace() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: spacesRequest.post,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['spaces']});
    },
  });
}

export {useGetSpaces, useGetSpacesOut, usePostSpace};
