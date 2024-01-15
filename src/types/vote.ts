import { ReactNode } from "react";

export interface VoteBottomButtonProps {
  onClick: () => void;
  title: string;
}

export interface VoteContentProps {
  onBottomSlideOpen: (content: ReactNode) => void;
  data: VoteListData;
  showResults: boolean;
}

export interface VoteHeaderProps {
  onBottomSlideOpen: () => void;
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
  onBottomSlideOpen: (content: ReactNode) => void;
  candidate: CandidateData;
  showResults: boolean;
  index: number;
}

export interface VoteMeatballProps {
  state: string;
}

export interface AlertModalProps {
  title: string;
  subText?: string;
  actionButton: string;
  isSmallSize: boolean;
  onClickAction?: () => void;
}
