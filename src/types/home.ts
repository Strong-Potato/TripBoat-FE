// 홈 타입

export interface RecommendedItemDataType {
  title: string;
  imageURL: string;
  location: string;
  score: string;
  reviewNumber: string;
  id: string;
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
export interface SearchHotItemType {
  title: string;
  imageURL: string;
  location: string;
  id: number;
}
