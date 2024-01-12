type Invitation = {
  valid: boolean;
  host: string;
  id: string;
};

export type InvitationProps = {
  invitation: Invitation;
  modalClose: React.Dispatch<React.SetStateAction<boolean>>;
};
