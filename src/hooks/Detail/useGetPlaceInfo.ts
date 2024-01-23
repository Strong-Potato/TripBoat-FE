import {getPlaceInfo} from '@/api/detail';
import {useSuspenseQuery} from '@tanstack/react-query';

export const useGetPlaceInfo = (id: number, typeId: number) => {
  return useSuspenseQuery({
    queryKey: ['place', id, typeId],
    queryFn: () => getPlaceInfo(id, typeId),
  });
};
