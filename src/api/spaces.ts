import axios from 'axios';

import {
  ExitSpaceParams,
  journeyParams,
  journeyPutParams,
  PlaceParams,
  SpaceDateParams,
  SpaceRegionParams,
} from '@/types/route';

export const spacesRequest = {
  getUpcoming: async () => {
    try {
      const res = await axios.get('/api/members/my-spaces/upcoming', {withCredentials: true});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  getOutdated: async ({pageParam}: {pageParam: number}) => {
    try {
      const res = await axios.get('/api/members/my-spaces/outdated', {
        params: {
          size: 5,
          page: pageParam,
        },
        withCredentials: true,
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },

  post: async () => {
    try {
      const res = await axios.post('/api/spaces', {withCredentials: true});
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};

// [GET] 지역 리스트 조회
export const getRegions = async () => {
  const response = await axios.get(`/api/spaces/city`, {withCredentials: true});
  return response.data.data.cities;
};

// [GET] 단일 여행 스페이스 조회
export const getSpace = async (spaceId: number) => {
  try {
    const response = await axios.get(`/api/spaces/${spaceId}`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// [GET] 최근 여행 스페이스 조회
export const getRecentSpace = async () => {
  try {
    const response = await axios.get(`/api/spaces/recent`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// [GET] 여행 일정 조회
export const getJourneys = async (spaceId: number) => {
  try {
    const response = await axios.get(`/api/spaces/${spaceId}/journey`, {withCredentials: true});
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// [POST] 일정 추가
export const postPlaces = async ({spaceId, journeyId, placeIds}: PlaceParams) => {
  try {
    const response = await axios.post(
      `/api/spaces/${spaceId}/places`,
      {journeyId: journeyId, placeIds: placeIds},
      {withCredentials: true},
    );
    console.log('[SUCCESS]', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// [PUT] 일정 수정
export const putPlaces = async ({spaceId, places}: journeyPutParams) => {
  try {
    const response = await axios.put(`/api/spaces/${spaceId}/places`, {places: places}, {withCredentials: true});
    console.log('[SUCCESS]', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// [PUT] 지역 선택
export const putRegions = async ({spaceId, cities}: SpaceRegionParams) => {
  try {
    const response = await axios.put(`/api/spaces/${spaceId}/title`, {cities: cities}, {withCredentials: true});
    console.log('[SUCCESS]', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// [PUT] 날짜 선택
export const putDates = async ({spaceId, startDate, endDate}: SpaceDateParams) => {
  try {
    const response = await axios.put(
      `/api/spaces/${spaceId}/dates`,
      {startDate: startDate, endDate: endDate},
      {withCredentials: true},
    );
    console.log('[SUCCESS]', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// [PUT] 여행 나가기
export const putExitSpace = async ({spaceId}: ExitSpaceParams) => {
  try {
    const response = await axios.put(`/api/spaces/${spaceId}/exit`);
    console.log('[SUCCESS]', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// [DELETE] 일정 삭제
export const deletePlaces = async ({spaceId, places}: journeyParams) => {
  try {
    const response = await axios.delete(`/api/spaces/${spaceId}/places`, {data: {places: places}});
    console.log('[SUCCESS]', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
