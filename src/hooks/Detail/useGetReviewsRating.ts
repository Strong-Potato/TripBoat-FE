import {getReviewsRating} from '@/api/detail';
import {useSuspenseQuery} from '@tanstack/react-query';

export const useGetReviewsRating = (id: number, typeId: number, title: string) => {
  console.log(title);
  return useSuspenseQuery({
    queryKey: ['reviewsRating', id, typeId, title],
    queryFn: () => getReviewsRating(id, typeId, title),
  });
};
