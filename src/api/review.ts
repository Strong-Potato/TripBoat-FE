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
  getReviews: async ({
    pageParam,
    id,
    typeId,
    title,
  }: {
    pageParam: number;
    id: number;
    typeId: number;
    title: string;
  }) => {
    try {
      const res = await axios.get('/api/reviews', {
        params: {
          placeId: id,
          contentTypeId: typeId,
          placeTitle: title,
          size: 5,
          page: pageParam,
        },
        withCredentials: true,
      });
      console.log(res);

      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return error.response;
      }
    }
  },
};
