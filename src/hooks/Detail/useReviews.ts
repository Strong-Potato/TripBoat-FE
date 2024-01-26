import {getReviews, getReviewsRating, postReview} from '@/api/detail';
import {useSuspenseQuery} from '@tanstack/react-query';
import {useCustomMutation} from '../Votes/vote';

export const useGetReviewsRating = (id: number, typeId: number, title: string) => {
  return useSuspenseQuery({
    queryKey: ['reviewsRating', id, typeId, title],
    queryFn: () => getReviewsRating(id, typeId, title),
  });
};

export const useGetReviews = (id: number, typeId: number, title: string) => {
  return useSuspenseQuery({
    queryKey: ['reviews', id, typeId, title],
    queryFn: () => getReviews(id, typeId, title),
  });
};

export const usePostReview = () => {
  return useCustomMutation(postReview, ['reviewsRating', 'reviews']);
};
