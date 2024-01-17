export interface PlaceCardProps {
  index: number;
  name: string;
  category: string;
  address: string;
}

export interface Place {
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
  };
}

export interface Journey {
  id: number;
  date: string;
  places: Place[];
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
