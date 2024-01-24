export type InvitationProps = {
  inviteCode: string;
  isLogin?: string;
  modal: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface InviteCode {
  exp: number;
  iat: number;
  iss: string;
  purpose: string;
  space_id: number;
}

export interface InviteCodeRequestParams {
  spaceId: string;
}
