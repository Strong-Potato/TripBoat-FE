import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "@tanstack/react-query";
import axios from "axios";

import { TravelListItem } from "@/types/sidebar";

const spacesRequest = {
  getSpaces: () =>
    axios
      .get("/api/spaces", { params: {} })
      .then((response) => response.data.data),
  postSpaces: () => axios.post("/api/spaces"),
};

function useGetSpaces(
  isSideOpen: boolean,
): UseQueryResult<TravelListItem[], Error> {
  return useQuery({
    queryKey: ["spaces"],
    queryFn: spacesRequest.getSpaces,
    enabled: isSideOpen,
  });
}

function usePostSpace() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: spacesRequest.postSpaces,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
    },
  });
}

// function useInviteCode() {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: inviteCodeRequest.getInviteCode,
//     onSuccess: (data) => {},
//   });
// }
export { useGetSpaces, usePostSpace };
