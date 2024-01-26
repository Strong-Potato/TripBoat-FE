import {MutableRefObject} from 'react';

export interface ActionListProps {
  reviewId: MutableRefObject<number | undefined>;
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
