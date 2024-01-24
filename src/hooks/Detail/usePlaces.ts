import {getPlacesNearby} from '@/api/detail';
import {useSuspenseQuery} from '@tanstack/react-query';
import {getPlaceInfo} from '@/api/detail';

export const useGetPlaceInfo = (id: number, typeId: number) => {
  return useSuspenseQuery({
    queryKey: ['place', id, typeId],
    queryFn: () => getPlaceInfo(id, typeId),
  });
};

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
