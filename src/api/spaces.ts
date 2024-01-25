import axios from 'axios';

import {SpaceDateParams, SpaceRegionParams} from '@/types/route';

export const spacesRequest = {
  getUpcoming: async () => {
    try {
      const res = await axios.get('/api/members/my-spaces/upcoming', {withCredentials: true});
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
  const response = await axios.get(`/api/spaces/city`);
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
