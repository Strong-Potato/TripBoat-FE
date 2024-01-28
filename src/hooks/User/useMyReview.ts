import {useInfiniteQuery, useMutation, useQueryClient} from '@tanstack/react-query';

import {reviewRequest} from '@/api/review';
import {deleteMyReviews, patchMyReview} from '@/api/detail';

export function useGetMyReview() {
  return useInfiniteQuery({
    queryKey: ['myReview'],
    queryFn: reviewRequest.getMyReview,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });
}

export const useDeleteMyReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteMyReviews,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [`myReview`]});
    },
  });
};

export const usePatchMyReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: patchMyReview,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [`myReview`]});
    },
  });
};
