import axios from 'axios';

export const memberRequest = {
  getMyInfo: async () => {
    try {
      const res = await axios.get('/api/members/my-info', {withCredentials: true});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
