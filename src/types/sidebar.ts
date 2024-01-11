interface User {
  name: string;
  src: string;
  travelList: TravelListItem[];
}

type TravelListItem = {
  name: string[];
  startDate: string;
  endDate: string;
  id: string;
};

export type SideBarProps = {
  sideClose: () => void;
  isSideOpen: boolean;
  user: User;
};

export type TravelListProps = {
  travelList: TravelListItem[];
};
