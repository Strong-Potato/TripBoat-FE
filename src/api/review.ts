import axios from 'axios';

export const reviewRequest = {
  getMyReview: async ({pageParam}: {pageParam: number}) => {
    try {
      const res = await axios.get('/api/members/my-reviews', {
        params: {
          size: 5,
          page: pageParam,
        },
        withCredentials: true,
      });
      console.log(res);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
