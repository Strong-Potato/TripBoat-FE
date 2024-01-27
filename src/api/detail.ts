import axios from 'axios';

import {MySpaces, placeInfoData, PlacesNearby, PostReview, ReviewsRating, Wishes} from '@/types/detail';

// --------------------------- GET ---------------------------

export const getPlaceInfo = async (id: number, typeId: number): Promise<placeInfoData> => {
  const response = await axios.get('/api/places/info', {
    params: {placeId: id, placeTypeId: typeId},
  });

  return response.data;
};

export const getReviewsRating = async (id: number, typeId: number, title: string): Promise<ReviewsRating | any> => {
  try {
    const response = await axios.get('/api/reviews/rating', {
      params: {placeId: id, contentTypeId: typeId, placeTitle: title},
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return error.response;
    }
  }
};

export const getIsWish = async (id: number) => {
  try {
    const response = await axios.get(`/api/wishes/${id}`, {
      withCredentials: true,
    });
    console.log(response.data);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      return error.response;
    }
  }
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

export const getMySpaces = async (page: number, size: number, sort: string): Promise<MySpaces> => {
  const response = await axios.get('/api/members/my-spaces/upcoming', {
    params: {
      page: page,
      size: size,
      sort: sort,
    },
  });

  return response.data;
};

// --------------------------- POST ---------------------------

export const postWishes = async ({placeId, contentTypeId}: Wishes) => {
  try {
    const response = await axios.post(
      '/api/wishes',
      {placeId, contentTypeId},
      {
        withCredentials: true,
      },
    );
    console.log('axios 포스트 성공', response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const postReview = async ({placeId, contentTypeId, title, rating, content, images, visitedAt}: PostReview) => {
  try {
    const response = await axios.post(
      '/api/reviews',
      {placeId, contentTypeId, title, rating, content, images, visitedAt},
      {
        withCredentials: true,
      },
    );
    console.log('axios 포스트 성공', response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// --------------------------- DELETE ---------------------------

export const deleteWishes = async (id: number) => {
  try {
    const response = await axios.delete(`/api/wishes/${id}`);
    console.log('axios delete success', response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
