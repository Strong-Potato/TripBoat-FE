export interface OtherCardPropsType {
  image: string;
  name: string;
  location: string;
  point: string;
  count: number;
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
  onClose: () => void;
}

// Main

// Contents
export interface ContentsProps {
  onOpen: () => void;
}

export interface ContentsInformationProps {
  onOpen: () => void;
}

export interface ContentsShortReviewsProps {
  onOpen: () => void;
}

export interface ContentsReviewsProps {
  onOpen: () => void;
}

export interface ReviewBottomSlideProps {
  onClose: () => void;
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
  setIsTripSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface RegistrationListItemProps {
  title: string;
  isSelectedProps: boolean;
}

export interface RegistrationModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
