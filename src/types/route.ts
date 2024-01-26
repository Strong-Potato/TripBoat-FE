import {Dispatch} from 'react';
import {SwiperRef} from 'swiper/react';

export interface DraggablePlaceCardProps {
  id: number;
  order: number;
  name: string;
  category: string;
  address: string;
  placeId: number;
  contentTypeId: number;
  editMode: boolean;
  selectedPlaces: string[];
  onSelect: (name: string) => void;
  moveCard: (id: number, atIndex: number) => void;
  findCard: (id: number) => {card: PlaceList; index: number};
}

export type PlaceCardProps = Pick<DraggablePlaceCardProps, 'order' | 'name' | 'category' | 'address'>;

export interface PlaceOrder {
  id: number;
  order: number;
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
  contentTypeId: number;
  placeId: number;
}

export interface Journey {
  id: number;
  date: string;
  places: PlaceOrder[];
}

export interface PlaceList {
  id: number;
  order: number;
  place: {
    id: number;
    title: string;
    thumbnail: string;
    address: string;
    addressDetail: string;
    latitude: number;
    longitude: number;
    category: string;
    contentTypeId: number;
    placeId: number;
  };
}

export interface DayRouteProps {
  day: number;
  date: string;
  placeList: PlaceList[];
  editMode: boolean;
  selectedPlaces: string[];
  handlePlaceSelection: (name: string) => void;
}

export interface RouteTabPanelProps {
  journeys: Journey[];
}

export interface DateItem {
  date: string;
}

export interface DayNavigationBarProps {
  dateList: DateItem[];
  editMode: boolean;
  handleEditMode: () => void;
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
  journeysData: Journeys;
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

export interface Item {
  id: number;
  originalIndex: number;
}

export interface ErrorResponse {
  detail: string;
  instance: string;
  responseCode: number;
  status: number;
  title: string;
  type: string;
}

export interface SpaceResponse {
  data: {
    id: number;
    title: string;
    startDate: string | null;
    endDate: string | null;
    dueDate: number;
    city: string | null;
    thumbnail: string | null;
    members: [
      {
        id: number;
        nickname: string;
        profile: string;
      },
    ];
  };
  status: number;
  responseCode: number;
  detail?: string;
}

export interface SpaceRegionParams {
  spaceId: number;
  cities: string[];
}

export interface SpaceDateParams {
  spaceId: number;
  startDate: string;
  endDate: string;
}

export interface Member {
  id: number;
  nickname: string;
  profile: string;
}

export interface Members {
  members: Member[];
}

export interface ExitSpaceParams {
  spaceId: number;
}

export interface PlaceParams {
  spaceId: number;
  journeyId: number;
  placeIds: number[];
}

export interface SelectPlace {
  journeyId: number;
  placeIds: number[];
}

export interface journeyParams {
  spaceId: number;
  places: SelectPlace[];
}
