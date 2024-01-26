import {GetUserProp} from './sidebar';

export interface UserInfo {
  nickname?: string;
  profile?: string;
  provider?: string;
  email?: string;
}

export interface ProfileProps {
  data: GetUserProp | undefined;
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
  tab: string;
}
