export interface VoteBottomButtonProps {
  onClick: () => void;
  title: string;
}

export interface VoteContentProps {
  onClick: () => void;
  data: VoteListData;
  showResults: boolean;
}

export interface VoteHeaderProps {
  onOpen: () => void;
  title: string;
}

export interface CandidateData {
  name: string;
  imageURL: string;
  category: string;
  location: string;
  voteUserId: string[];
  voteCounts: number;
  memo: string;
  id: number;
}
[];

export interface VoteListData {
  title: string;
  profile: string;
  state: string;
  voteUserId: string[];
  candidates: CandidateData[];
  id: string;
}

export interface CandidateCardProps {
  candidate: CandidateData;
  showResults: boolean;
  index: number;
}
