export type SideBarProps = {
  sideClose: () => void;
  isSideOpen: boolean;
};

type TravelListItem = {
  name: string;
  date: string;
};

export type TravelListProps = {
  travelList: TravelListItem[];
};
