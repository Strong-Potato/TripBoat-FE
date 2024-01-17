import axios from 'axios';

import {postVoteTitleProps} from '@/types/vote';

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    // Authorization: accessToken,
  },
});

// export const getVotes = async () => {
//   const response = await instance.get("/votes", { params: requiredParams });
//   return response.data.data.content;
// };

export const postVoteTitle = async ({spaceId, title}: postVoteTitleProps): Promise<void> => {
  const response = await instance.post('/votes', {params: {spaceId, title}});
  return response.data;
};
