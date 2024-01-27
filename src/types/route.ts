import {Dispatch} from 'react';
import {SwiperRef} from 'swiper/react';

export interface DraggablePlaceCardProps {
  journeyId: number;
  selectedId: number;
  order: number;
  name: string;
  category: string;
  address: string;
  placeId: number;
  contentTypeId: number;
  editMode: boolean;
  selectedPlaces: SelectedPlace[];
  onSelect: (journeyId: number, selectedId: number, placeId: number) => void;
  moveCard: (id: number, atIndex: number) => void;
  findCard: (id: number) => {card: PlaceList; index: number};
}

export type PlaceCardProps = Pick<DraggablePlaceCardProps, 'order' | 'name' | 'category' | 'address'>;

export interface PlaceOrder {
  selectedId: number;
  order: number;
  place: Place;
}

export interface Place {
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

export interface DayRouteProps {
  day: number;
  date: string;
  journeyId: number;
  placeList: PlaceList[];
  editMode: boolean;
  editPlaces: (journeyId: number, placeCards: PlaceList[]) => void;
  selectedPlaces: SelectedPlace[];
  setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlace[]>>;
  handlePlaceSelection: (
    journeyId: number,
    selectedId: number,
    placeId: number,
    selectedPlaces: SelectedPlace[],
    setSelectedPlaces: React.Dispatch<React.SetStateAction<SelectedPlace[]>>,
  ) => void;
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
  areaCode: string;
  placeImageUrl: string;
  rank: number;
  onSelect: (name: string, id: number) => void;
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
  // journeys: {
  //   journeyId: number;
  //   date: number;
  //   places: [
  //     {
  //       selectedId: number;
  //       order: 0;
  //       place: {
  //         placeId: number;
  //         title: string;
  //         thumbnail: string;
  //         address: string;
  //         addressDetail: string;
  //         latitude: number;
  //         longitude: number;
  //         category: string;
  //       };
  //     },
  //   ];
  // };
}

export interface Journey {
  journeyId: number;
  date: string;
  places: PlaceList[];
}

export interface PlaceList {
  selectedId: number;
  order: number;
  place: {
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

export interface RouteMapSlideProps {
  journeys: Journey[];
  setSelectedPinIndex: Dispatch<React.SetStateAction<number>>;
  setCenterMarker: Dispatch<React.SetStateAction<LatLng>>;
  swiperRef: React.RefObject<SwiperRef>;
  activeDay: number;
  onDayChange: (day: number) => void;
}

export interface Item {
  selectedId: number;
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
  selectedId: number[];
}

export interface journeyParams {
  spaceId: number;
  places: TransformedDataItem[];
}

export interface journeyPutParams {
  spaceId: number;
  places: TransformedPutDataItem[];
}

export interface SelectedPlace {
  journeyId: number;
  selectedId: number;
  placeId: number;
}

export interface TransformedPutDataItem {
  journeyId: number;
  placeIds: number[];
}

export interface TransformedDataItem {
  journeyId: number;
  selectedIds: number[];
}

export interface DayMoveProps {
  journeysData: Journeys;
  selectedPlaces: SelectedPlace[];
  onClose: () => void;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AddPlaceProps {
  journeyId: number;
  day: number;
}

export interface Vote {
  voteId: number;
  title: string;
  voteStatus: string;
}

export interface Votes {
  votes: Vote[];
}

export interface Candidate {
  id: number;
  placeInfo: {
    placeId: number;
    placeName: string;
    category: string;
    areaCode: string;
    placeImageUrl: string;
  };
}
