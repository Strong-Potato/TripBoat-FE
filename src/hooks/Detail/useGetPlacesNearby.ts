import {getPlacesNearby} from '@/api/detail';
import {useSuspenseQuery} from '@tanstack/react-query';

export const useGetPlacesNearby = (
  page: number,
  size: number,
  areaCode: number,
  sigunguCode: number,
  placeTypeId: number,
  sort: string,
  categoryCode: string,
) => {
  return useSuspenseQuery({
    queryKey: ['placesNearby', page, size, areaCode, sigunguCode, placeTypeId, sort, categoryCode],
    queryFn: () => getPlacesNearby(page, size, areaCode, sigunguCode, placeTypeId, sort, categoryCode),
  });
};
