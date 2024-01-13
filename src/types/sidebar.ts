interface User {
  name: string;
  src: string;
}

type TravelListItem = {
  title: string;
  startDate: string;
  endDate: string;
  id: string;
};

export type SideBarProps = {
  sideClose: () => void;
  isSideOpen: boolean;
  users: User;
};

export type TravelListProps = {
  travelList: TravelListItem[];
};
