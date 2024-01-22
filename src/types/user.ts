export interface UserInfo {
  nickname: string;
  image: string;
  provider: string;
  email: string;
}

export interface ProfileProps {
  userInfo: UserInfo;
}

export interface MySpaceData {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  dueDate: number;
  thumbnail: string;
}

export type MySpaces = MySpaceData[];

export interface TabProps {
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface MySpaceListProps {
  data: MySpaces | null;
  tab: string;
}
