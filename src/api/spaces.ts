import axios from 'axios';

import {Region} from '@/types/regionSearch';
import {SpaceDateParams, SpaceRegionParams, SpaceResponse} from '@/types/route';

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

// [GET] 지역 리스트
export const getRegions = async (): Promise<Region[]> => {
  const response = await axios.get(`/api/spaces/city`);
  return response.data.data.cities;
};

// [GET] 단일 여행 스페이스
export const getSpace = async (spaceId: number): Promise<SpaceResponse> => {
  const response = await axios.get(`/api/spaces/${spaceId}`, {withCredentials: true});
  return response.data;
};

// [PUT] 지역 선택
export const putRegions = async ({spaceId, cities}: SpaceRegionParams) => {
  try {
    const response = await axios.put(`/api/spaces/${spaceId}/title`, {cities: cities});
    console.log('[SUCCESS]', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

// [PUT] 날짜 선택
export const putDates = async ({spaceId, startDate, endDate}: SpaceDateParams) => {
  try {
    const response = await axios.put(`/api/spaces/${spaceId}/dates`, {startDate: startDate, endDate: endDate});
    console.log('[SUCCESS]', response);
    return response;
  } catch (error) {
    console.error(error);
  }
};
