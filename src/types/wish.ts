import {SearchItemType} from './home';

export interface WishesData {
  id: number;
  area: string;
  category: string;
  title: string;
  thumbnail: string;
  contentTypeId: number;
}

export interface Wishes {
  places: SearchItemType[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalResult: number;
  first: boolean;
  last: boolean;
}

export interface WishFilterType {
  category: number;
  location: string;
  placeID: string;
  tripDate: string;
  sort: string;
}
