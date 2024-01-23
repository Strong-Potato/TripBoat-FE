import {ReactNode} from 'react';

export interface OtherCardPropsType {
  image: string;
  name: string;
  location: string;
  point: string;
}

export interface ReviewPropsTypes {
  name: string;
  isGoogle: boolean;
  point: string;
  visitedAt: string;
  content: string;
  images: string[] | undefined;
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
}

// Main

// Contents

export interface ContentsShortReviewsProps {
  onOpen: () => void;
}

export interface ContentsReviewsProps {
  onOpen: () => void;
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
}

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
