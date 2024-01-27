import {getReviewsRating, postReview} from '@/api/detail';
import {useInfiniteQuery, useMutation, useQueryClient, useSuspenseQuery} from '@tanstack/react-query';
import {reviewRequest} from '@/api/review';

export const useGetReviewsRating = (id: number, typeId: number, title: string) => {
  return useSuspenseQuery({
    queryKey: [`reviewsRating_${id}`, id, typeId, title],
    queryFn: () => getReviewsRating(id, typeId, title),
    retry: false,
  });
};

export function useGetReviews(id: number, typeId: number, title: string) {
  return useInfiniteQuery({
    queryKey: [`reviews_${id}`],
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

export const usePostReview = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postReview,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [`vote_${id}`]});
      queryClient.invalidateQueries({queryKey: [`candidates_${id}`]});
    },
  });
};
