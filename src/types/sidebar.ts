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

export type GetUpcomingProp = {
  status: number;
  message: string;
  data: Datas;
};

export type Datas = {
  spaces: Spaces[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalResult: number;
  first: boolean;
  last: boolean;
};

export type Spaces = {
  title: string;
  startDate: string;
  endDate: string;
  id: number;
  city: string;
  dueDate: number;
  thumbnail: string;
  members: Member[];
  duedate: number;
};

export type Member = {
  id: number;
  nickname: string;
  profile: string;
};

export type spaceInfo = {
  spaceId: number;
  nickname: string;
};

export interface TravelListProp {
  isSideOpen: boolean;
}

export type SideBarProps = {
  sideClose: () => void;
  isSideOpen: boolean;
};
