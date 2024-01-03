export type SideBarProps = {
  onClose: () => void;
  isOpen: boolean;
};

type TravelListItem = {
  name: string;
  date: string;
};

export type TravelListProps = {
  travelList: TravelListItem[];
};
