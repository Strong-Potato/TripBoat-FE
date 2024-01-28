import {ReactNode} from 'react';

export interface ActionListProps {
  setBottomSlideContent: React.Dispatch<React.SetStateAction<ReactNode | null>>;
  reviewId: number;
  onBottomSlideOpen: () => void;
  onBottomSlideClose: () => void;
  starCountProps: number;
  textProps: string;
  timeProps: Date;
  imageUrlsProps: string[];
}

export interface Reviews {
  content: string;
  id: number;
  images: string[];
  place: Place;
  rating: number;
  visitedAt: string;
}

export interface Place {
  area: string;
  category: string;
  id: number;
  thumbnail: string;
  title: string;
}
