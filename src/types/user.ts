export interface UserInfo {
  nickname: string;
  image: string;
  provider: string;
  email: string;
}

export interface ProfileProps {
  userInfo: UserInfo;
}
