import axios from 'axios';

export const spacesRequest = {
  getUpcoming: async () => {
    try {
      const res = await axios.get('/api/members/my-spaces/upcoming', {withCredentials: true});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  post: async () => {
    try {
      const res = await axios.post('/api/spaces', {withCredentials: true});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
