export type InvitationProps = {
  inviteCode: string;
  isLogin?: string;
  modal: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface InviteCode {
  RESULT: string;
  PUBLISHER: string;
  ID: string;
}
