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

export interface TripSpaceDataType {
  tripTitle: string;
  tripDay: string;
  tripImg: string;
  dDay: string | undefined;
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
export interface SearchItemLocationType {
  address: string;
  addressDetail: string;
  phone: string;
  areaCode: number;
  sigunguCode: number;
  zipCode: number;
  latitude: number;
  longtitude: number;
}

export interface SearchHotItemType {
  title: string;
  thumbnail: string;
  areaCode: number;
  sigunguCode: number;
  category: string;
  id: number;
  contentTypeId: number;
}

export interface SearchItemType {
  id: number;
  contentTypeId: number;
  title: string;
  thumbnail: string;
  location: SearchItemLocationType;
  category: string;
}
