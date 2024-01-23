// 홈 타입

export interface RecommendedItemDataType {
  id: number;
  contentTypeId: number;
  title: string;
  thumbnail: string;
  areaCode: number;
  sigunguCode: number;
  category: string;
  rating: string;
}

export interface LocationDataType {
  location: string;
  imageURL: string;
}

export interface VoteDataType {
  title: string;
  date: string;
  profile: string;
  discussion: string;
  voteURL: string;
}

export interface TripSpaceData {
  id: number;
  title: string;
  city: string;
  startDate: string;
  endDate: string;
  dueDate: number;
  thumbnail: string;
}

export interface TripSpace {
  spaces: TripSpaceData[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalResult: number;
  first: boolean;
  last: boolean;
}

export interface LeftButtonPropsType {
  slideLocation: number;
  setSlideLocation: React.Dispatch<React.SetStateAction<number>>;
  itemWidth: number;
  flexGap: number;
  buttonSize?: number;
}

interface ComponentSize {
  width: number;
  height: number;
}

export interface SlideButtonPropsType extends LeftButtonPropsType {
  slideSize: ComponentSize;
  itemNumber: number;
}

// 홈 검색 타입
export interface DataType<T> {
  status: number;
  message: string;
  data: T;
}

export interface Keywords {
  keywords: SearchKeywordType[];
}

export interface Search {
  places: SearchItemType[];
}

export interface Popular {
  places: SearchHotItemType[];
}

export interface SearchKeywordType {
  name: string;
  code: string;
}

export interface SearchItemLocationType {
  address: string;
  addressDetail: string;
  phone: string;
  areaCode: number;
  sigunguCode: number;
  zipCode: number;
  latitude: number;
  longitude: number;
}

export interface SearchHotItemType {
  id: number;
  contentTypeId: number;
  title: string;
  thumbnail: string;
  areaCode: number;
  sigunguCode: number;
  category: string;
}

export interface SearchItemType {
  id: number;
  contentTypeId: number;
  title: string;
  thumbnail: string;
  location: SearchItemLocationType;
  category: string;
}

export interface ForSearchType {
  keyword: string;
  category: number;
  map: string;
  location: string;
  sort: string;
  hot: string;
}
