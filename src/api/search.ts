import axios from 'axios';
import {Dispatch} from 'react';

import {translateCategoryCode, translateLocation, translateSort} from '@/utils/translateSearchData';

import {DataType, Keywords, Popular, Search, SearchHotItemType, SearchKeywordType} from '@/types/home';

interface PramsType {
  keyword?: string;
  page: number;
  size: number;
  sort: string;
  categoryCode?: string;
  areaCode?: number;
  sigunguCode?: number;
}

export async function search(keyword: string, location: string, sort: string, page: number) {
  try {
    const searchLocation = translateLocation(location);
    const params: PramsType = {
      keyword: keyword,
      page: page,
      size: 20,
      sort: translateSort(sort),
    };
    if (searchLocation.areaCode !== 0) {
      params.areaCode = searchLocation.areaCode;
      if (searchLocation.sigunguCode !== 0) {
        params.sigunguCode = searchLocation.sigunguCode;
      }
    }
    const fetchData = await axios.get('/api/places/search', {
      params: params,
    });
    const data: DataType<Search> = fetchData.data;
    return data?.data.places;
  } catch (error) {
    console.log(error);
  }
}

export async function keywordSearch(keyword: string, location: string, sort: string, page: number, size = 20) {
  try {
    const searchLocation = translateLocation(location);
    const categoryCode = translateCategoryCode(keyword);
    const params: PramsType = {
      page: page,
      size: size,
      sort: translateSort(sort),
      categoryCode: categoryCode,
    };
    if (searchLocation.areaCode !== 0) {
      params.areaCode = searchLocation.areaCode;
      if (searchLocation.sigunguCode !== 0) {
        params.sigunguCode = searchLocation.sigunguCode;
      }
    }

    const fetchData = await axios.get('/api/places/search', {
      params: params,
    });
    const data: DataType<Search> = fetchData.data;

    return data?.data.places;
  } catch (error) {
    console.log(error);
  }
}

export async function getPopularItem(
  type: number,
  set: Dispatch<React.SetStateAction<SearchHotItemType[] | undefined>>,
) {
  try {
    const fetchData = await axios.get('/api/places/popular', {
      params: {
        size: 10,
        placeTypeId: type,
      },
    });
    const data: DataType<Popular> = fetchData.data;

    set(data.data.places);
  } catch (error) {
    console.log(error);
  }
}

export async function getHotKeyword(apiURL: string, set: Dispatch<SearchKeywordType[] | undefined>) {
  try {
    const fetchData = await axios.get(`${apiURL}`);
    const data: DataType<Keywords> = fetchData.data;
    set(data.data.keywords);
  } catch (error) {
    console.log(error);
  }
}
