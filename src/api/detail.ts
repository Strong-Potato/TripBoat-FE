import {PlacesNearby, ReviewsRating, placeInfoData} from '@/types/detail';
import axios from 'axios';

export const getPlaceInfo = async (id: number, typeId: number): Promise<placeInfoData> => {
  const response = await axios.get('/api/places/info', {
    params: {placeId: id, placeTypeId: typeId},
  });

  return response.data;
};

export const getReviewsRating = async (id: number, typeId: number, title: string): Promise<ReviewsRating> => {
  console.log(id, typeId, title);
  const response = await axios.get('/api/reviews/rating', {
    params: {placeId: id, contentTypeId: typeId, placeTitle: title},
  });

  return response.data;
};

export const getIsWish = async (id: number, setIsWish: React.Dispatch<React.SetStateAction<boolean>>) => {
  const response = await axios.get(`/api/wishes/${id}`, {
    withCredentials: true,
  });

  setIsWish(response.data.data);

  return response.data;
};

export const getPlacesNearby = async (
  page: number,
  size: number,
  areaCode: number,
  sigunguCode: number,
  placeTypeId: number,
  sort: string,
  categoryCode: string,
): Promise<PlacesNearby> => {
  const response = await axios.get('/api/places/nearby', {
    params: {
      page: page,
      size: size,
      areaCode: areaCode,
      sigunguCode: sigunguCode,
      placeTypeId: placeTypeId,
      sort: sort,
      categoryCode: categoryCode,
    },
  });

  return response.data;
};
