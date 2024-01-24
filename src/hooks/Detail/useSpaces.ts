import {getMySpaces} from '@/api/detail';
import {useSuspenseQuery} from '@tanstack/react-query';

export const useGetSpacesCity = (page: number, size: number, sort: string) => {
  return useSuspenseQuery({
    queryKey: ['spacesCity', page, size, sort],
    queryFn: () => getMySpaces(page, size, sort),
  });
};
