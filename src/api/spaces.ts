import axios from 'axios';

import {Region} from '@/types/regionSearch';

// [GET] 지역 리스트
export const getRegions = async (): Promise<Region[]> => {
  const response = await axios.get(`/api/spaces/city`);
  return response.data.data.cities;
};
