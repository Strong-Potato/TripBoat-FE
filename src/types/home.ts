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
