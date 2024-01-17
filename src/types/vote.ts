import { ReactNode } from "react";

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

////////////////스웨거//////////////////
export interface SSCandidateData {
  id: number;
  placeId: number; //
  placeName: string;
  category: string;
  tagline: string; //메모?
  amIVoted: boolean; //
  //imageURL: string;
  //location: string;
  //voteUserId: string[];   //이거 필요
  //voteCounts: number;
  //memo: string;
}
[];
export interface SSVoteData {
  id: string;
  title: string;
  ownerProfile: {
    id: number;
    nickName: string;
    profile: string;
  };
  candidates: CandidateData[];
  // state: string;
  // voteUserId: string[];
}

export interface SSVoteCardData {
  voteId: string;
  title: string;
  ownerProfile: {
    id: number;
    nickName: string;
    profile: string;
  };
  votedMemberProfiles: [
    {
      id: 0; //props으로 내려줄게 아니라면 사진만 있어도 됨, 배열로
      nickName: string;
      profile: string;
    },
  ];
}
////////////////스웨거//////////////////

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

export interface CandidateCardProps {
  onBottomSlideOpen: (content: ReactNode) => void;
  candidate: CandidateData;
  showResults: boolean;
  index: number;
}

export interface VoteMeatballProps {
  state: string;
  isZeroCandidates: boolean;
}

export interface AlertModalProps {
  title: string;
  subText?: string;
  cancelText?: string;
  actionButton: string;
  isSmallSize: boolean;
  onClickAction?: () => void;
}

export interface CandidateListProps {
  candidates: CandidateData[];
  onBottomSlideOpen: (content: ReactNode) => void;
  showResults: boolean;
  isCandidateSelecting: boolean;
}
