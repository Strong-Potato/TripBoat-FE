import {useMutation, useQuery, useQueryClient, UseQueryResult} from '@tanstack/react-query';

import {spacesRequest} from '@/api/spaces';

import {TravelListItem} from '@/types/sidebar';

function useGetSpaces(isSideOpen: boolean): UseQueryResult<TravelListItem[], Error> {
  return useQuery({
    queryKey: ['spaces'],
    queryFn: spacesRequest.getSpaces,
    enabled: isSideOpen,
  });
}

function usePostSpace() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: spacesRequest.postSpaces,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['spaces']});
    },
  });
}

export {useGetSpaces, usePostSpace};
