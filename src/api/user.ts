import axios from 'axios';

export const memberRequest = {
  getMyInfo: () => axios.get('/api/members/my-info').then((response) => response.data.data),
};
