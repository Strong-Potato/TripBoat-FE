import axios from 'axios';

export const reviewRequest = {
  getMyReview: async (page: number, size: number) => {
    try {
      const res = await axios.get('/api/members/my-reviews', {
        params: {page, size},
        withCredentials: true,
      });
      console.log(res);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
