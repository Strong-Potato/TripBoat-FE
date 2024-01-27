import {getReviewsRating, postReview} from '@/api/detail';
import {useInfiniteQuery, useSuspenseQuery} from '@tanstack/react-query';
import {useCustomMutation} from '../Votes/vote';
import {reviewRequest} from '@/api/review';

export const useGetReviewsRating = (id: number, typeId: number, title: string) => {
  return useSuspenseQuery({
    queryKey: ['reviewsRating', id, typeId, title],
    queryFn: () => getReviewsRating(id, typeId, title),
    retry: false,
  });
};

export const usePostReview = () => {
  return useCustomMutation(postReview, ['reviewsRating', 'reviews']);
};

export function useGetReviews(id: number, typeId: number, title: string) {
  return useInfiniteQuery({
    queryKey: ['reviews'],
    queryFn: ({pageParam}: {pageParam: number}) => reviewRequest.getReviews({pageParam, id, typeId, title}),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}
