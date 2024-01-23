import axios from 'axios';

import {SearchItemType} from '@/types/home';

export async function getSearchData(
  page: number,
  areaCode: number,
  sigunguCode: number,
  placeTypeId: number,
  keyword: string,
  sort: string,
  categoryCode: string,
) {
  const searchData: SearchItemType = await axios.get('/api/places/search', {
    params: {
      page: page,
      size: 20,
      areaCode: areaCode,
      sigunguCode: sigunguCode,
      placeTypeId: placeTypeId,
      keyword: keyword,
      sort: sort,
      categoryCode: categoryCode,
    },
  });
  return searchData;
}
