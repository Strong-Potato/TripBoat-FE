import axios from "axios";

export const inviteCodeRequest = async (nickname: string, spaceId: string) => {
  const response = await axios.post("/api/members/join/spaces", {
    nickname,
    spaceId,
  });
  return response.data.data;
};

export const inviteCodeJoin = async () => {
  const response = await axios.post("/api/members/join");
  return response;
};
