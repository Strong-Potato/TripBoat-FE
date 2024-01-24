import axios from 'axios';

import {InviteCodeRequestParams} from '@/types/Invitation';

export const postJoin = async (spaceId: number) =>
  await axios.post(`/api/auth/join/spaces/${spaceId}`, {withCredentials: true});
export const postJoinSpaces = async (params: InviteCodeRequestParams) => {
  const {spaceId} = params;
  const response = await axios.post(`/api/auth/join/spaces/${spaceId}/code`, {withCredentials: true});
  return response.data.data;
};
