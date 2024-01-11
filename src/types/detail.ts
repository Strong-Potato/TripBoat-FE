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

export interface NavigationProps {
  onOpen: () => void;
}

export interface MainProps {
  openToast: (text: string) => void;
}

export interface MainTitleProps {
  openToast: (text: string) => void;
}

export interface NavigationMeatballProps {
  openToast: (text: string) => void;
}
