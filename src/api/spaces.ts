import axios from 'axios';

export const spacesRequest = {
  getSpaces: () => axios.get('/api/members/my-spaces/upcoming').then((response) => response.data.data.spaces),
  postSpaces: () => axios.post('/api/spaces').then((response) => response.data.data),
};
