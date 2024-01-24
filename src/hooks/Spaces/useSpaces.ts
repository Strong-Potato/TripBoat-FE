import {useMutation, useQuery, useQueryClient, UseQueryResult} from '@tanstack/react-query';

import {spacesRequest} from '@/api/spaces';

import {GetUpcomingProp} from '@/types/sidebar';

function useGetSpaces(isSideOpen: boolean): UseQueryResult<GetUpcomingProp, Error> {
  return useQuery({
    queryKey: ['spaces'],
    queryFn: spacesRequest.getUpcoming,
    enabled: isSideOpen,
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

export {useGetSpaces, usePostSpace};
