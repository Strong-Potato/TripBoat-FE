import axios from 'axios';

export const spacesRequest = {
  getSpaces: () => axios.get('/api/spaces', {params: {}}).then((response) => response.data.data),
  postSpaces: () => axios.post('/api/spaces'),
};
