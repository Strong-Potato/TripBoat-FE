import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { spacesRequest } from "@/api/axiosInstance";

import { TravelListItem } from "@/types/sidebar";

function useGetSpaces(
  isSideOpen: boolean,
): UseQueryResult<TravelListItem[], Error> {
  return useQuery({
    queryKey: ["spaces"],
    queryFn: spacesRequest.getSpaces,
    enabled: isSideOpen,
  });
}

// 뮤테이션 사용
// function usePutSpace() {
//   const queryClient = useQueryClient();

//   return useMutation(spacesRequest.putSpaces, {
//     onSuccess: () => {
//       queryClient.invalidateQueries(['spaces']);
//     },
//   });
// }

export { useGetSpaces };
