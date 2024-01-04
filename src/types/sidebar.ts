export type SideBarProps = {
  onClose: () => void;
  isOpen: boolean;
  sidebarRef: React.RefObject<HTMLButtonElement>;
};

type TravelListItem = {
  name: string;
  date: string;
};

export type TravelListProps = {
  travelList: TravelListItem[];
};
