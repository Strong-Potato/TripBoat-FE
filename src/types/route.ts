import {Dispatch} from 'react';
import {SwiperRef} from 'swiper/react';

export interface PlaceCardProps {
  index: number;
  name: string;
  category: string;
  address: string;
}

export interface PlaceOrder {
  id: number;
  Order: number;
  place: Place;
}

export interface Place {
  id: number;
  title: string;
  thumbnail: string;
  address: string;
  addressDetail: string;
  latitude: number;
  longitude: number;
  category: string;
}

export interface Journey {
  id: number;
  date: string;
  places: PlaceOrder[];
}

export interface DayRouteProps {
  day: number;
  date: string;
  placeList: {
    id: number;
    Order: number;
    place: {
      id: number;
      title: string;
      thumbnail: string;
      address: string;
      addressDetail: string;
      latitude: number;
      longitude: number;
      category: string;
    };
  }[];
}

export interface RouteTabPanelProps {
  journeys: Journey[];
}

export interface DateItem {
  date: string;
}

export interface DayNavigationBarProps {
  dateList: DateItem[];
}

export interface PlaceListProps {
  id: number;
  name: string;
  category: string;
  onSelect: (name: string) => void;
}

export interface VoteCardProps {
  id: number;
  title: string;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface MapInTripProps {
  mapRef: React.RefObject<kakao.maps.Map>;
  center: LatLng;
}

export interface Journeys {
  journeys: Journey[];
}

export interface RouteMapSlideProps {
  journeys: Journey[];
  setSelectedPinIndex: Dispatch<React.SetStateAction<number>>;
  setCenterMarker: Dispatch<React.SetStateAction<LatLng>>;
  swiperRef: React.RefObject<SwiperRef>;
  activeDay: number;
  onDayChange: (day: number) => void;
}
