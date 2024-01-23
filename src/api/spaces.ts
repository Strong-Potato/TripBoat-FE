import axios from 'axios';

export const spacesRequest = {
  getSpaces: () => axios.get('/api/spaces').then((response) => response.data.data.spaces),
  postSpaces: () => axios.post('/api/spaces'),
};
