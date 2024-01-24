export type GetUserProp = {
  status: number;
  message: string;
  data: UserDatas;
};

export interface UserDatas {
  nickname: string;
  profile: string;
  provider: string;
  email: string;
}

export type Spaces = {
  title: string;
  startDate: string;
  endDate: string;
  id: number;
  city: string;
  dueDate: number;
  thumbnail: string;
};

export type SideBarProps = {
  sideClose: () => void;
  isSideOpen: boolean;
};

export type GetUpcomingProp = {
  status: number;
  message: string;
  data: Datas;
};

export type Datas = {
  spaces: Spaces[];
};

export type spaceInfo = {
  spaceId: number;
  nickname: string;
};

export interface TravelListProp {
  isSideOpen: boolean;
}
