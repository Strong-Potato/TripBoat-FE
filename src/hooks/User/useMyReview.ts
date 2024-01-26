import {useInfiniteQuery} from '@tanstack/react-query';

import {reviewRequest} from '@/api/review';

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
