import {ReactNode} from 'react';

export interface OtherCardPropsType {
  image: string;
  name: string;
  point: number;
  id: number;
  contentTypeId: number;
}

export interface ReviewPropsTypes {
  name: string;
  isGoogle: boolean;
  rating: number;
  visitedAt: string;
  content: string;
  images: string[] | undefined;
  profileImage: string;
}

export interface SwiperButtonPropsType {
  imageIndex: number;
  imageLength: number;
}

export interface SwiperIndexPropsType {
  imageIndex: number;
  imageLength: number;
}

// Navigation
export interface NavigationProps {
  onOpen: () => void;
}

export interface NavigationMeatballProps {
  onBottomSlideOpen: (content: ReactNode, isReview: boolean) => void;
  onClose: () => void;
  id: number;
  contentTypeId: number;
}

// Main

// Contents

export interface ContentsShortReviewsProps {
  onOpen: () => void;
  reviewsRating: {
    rating: number;
    userRatingCount: number;
  };
  reviews: {
    content: string;
    images: string[];
    isGoogle: boolean;
    nickname: string;
    profileImage: string;
    rating: number;
    visitedAt: string;
  }[];
}

export interface ContentsReviewsProps {
  onOpen: () => void;
  reviewsRating: {
    rating: number;
    userRatingCount: number;
  };
  reviews: {
    content: string;
    images: string[];
    isGoogle: boolean;
    nickname: string;
    profileImage: string;
    rating: number;
    visitedAt: string;
  }[];
}

export interface ReviewBottomSlideProps {
  slideOnClose: () => void;
}

export interface InputWrapperProps {
  setIsValuedInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface starsWrapperProps {
  setIsValuedCount: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BottomFixedBtnProps {
  onOpen: () => void;
}

export interface RegistrationSlideProps {
  slideOnClose: () => void;
}

export interface RegistrationTripSpaceProps {
  setTripSelected: React.Dispatch<React.SetStateAction<string>>;
  spaces?: Spaces[] | undefined;
}

export type Spaces = {
  title: string;
  startDate: string;
  endDate: string;
  id: number;
  city: string;
  dueDate: number;
  thumbnail: string;
  members: Member[];
};

export type Member = {
  id: number;
  nickname: string;
  profile: string;
};

export interface RegistrationListItemProps {
  title: string;
  isSelectedProps: boolean;
}

export interface RegistrationModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface DateScrollPickerProps {
  slideOnClose: () => void;
}

export interface BottomSlideDetailProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isReviewModal: boolean;
  setBottomSlideContent: React.Dispatch<React.SetStateAction<ReactNode | null>>;
}

// ---------- api -----------

// Places/info
export interface placeInfoData {
  status: number;
  message: string;
  data: {
    place: placeInfoDataPlace;
  };
}

export interface placeInfoDataPlace {
  id: number;
  contentTypeId: number;
  title: string;
  location: {
    address: string;
    addressDetail: string;
    phone: string;
    areaCode: number;
    sigunguCode: number;
    zipCode: number;
    latitude: number;
    longitude: number;
  };
  category: string;
  thumbnail: string;
  originalImage: string;
  gallery: string[];
  createdTime: string;
  modifiedTime: string;
  openTime: string;
}

//reveiws/rating

export interface ReviewsRating {
  status: number;
  message: string;
  data: {
    rating: number;
    userRatingCount: number;
  };
}

//reviews
export interface Reviews {
  status: number;
  message: string;
  data: {
    reviews: {
      content: string;
      images: string[];
      isGoogle: boolean;
      nickname: string;
      profileImage: string;
      rating: number;
      visitedAt: string;
    }[];
  };
}

// wishes/{placeId}

export interface PlacesNearby {
  status: number;
  message: string;
  data: {
    places: {
      id: number;
      contentTypeId: number;
      title: string;
      thumbnail: string;
      areaCode: string;
      sigunguCode: number;
      category: string;
      rating: number;
    }[];
  };
}

// spaces/city

export interface MySpaces {
  status: number;
  message: string;
  data: {
    spaces: {
      id: number;
      title: string;
      startDate: string;
      endDate: string;
      dueDate: number;
    }[];
    pageNumber: number;
    pageSize: number;
    totalPages: number;
    totalResult: number;
    first: boolean;
    last: boolean;
  };
}

// wishes

export interface Wishes {
  placeId: number;
  contentTypeId: number;
}
