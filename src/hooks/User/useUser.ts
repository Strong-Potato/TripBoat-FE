import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

import { User } from "@/types/sidebar";

const memberRequest = {
  getMyInfo: () =>
    axios.get("/api/members/my-info").then((response) => response.data.data),
};
function useGetMyInfo(isOpen: boolean): UseQueryResult<User, Error> {
  return useQuery({
    queryKey: ["myInfo"],
    queryFn: memberRequest.getMyInfo,
    enabled: isOpen,
  });
}

export { useGetMyInfo };
