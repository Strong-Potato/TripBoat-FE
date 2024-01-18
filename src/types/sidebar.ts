interface Member {
  nickname: string;
  id: number;
  profile: string;
}

export interface User {
  nickname: string;
  profile: string;
}

export type TravelListItem = {
  title: string;
  startDate: string;
  endDate: string;
  id: number;
  members: Member[];
};

export type SideBarProps = {
  sideClose: () => void;
  isSideOpen: boolean;
};

export type TravelListProps = {
  data: TravelListItem[];
};

export type spaceInfo = {
  spaceId: number;
  nickname: string;
};
