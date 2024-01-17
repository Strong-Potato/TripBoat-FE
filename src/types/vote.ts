import {ReactNode} from 'react';

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
export interface CandidatesInfo {
  id: number;
  placeId: number;
  placeName: string;
  category: string;
  tagline: string;
  amIVoted: boolean;
  //
  imageURL: string;
  location: string;
  voteUserId: string[]; //이거 필요
}
[];

interface VotedMemberProfiles {
  id: number;
  nickName: string;
  profile: string;
}
[];

export interface VoteListInfo {
  voteId: string;
  title: string;
  voteStatus: string;
  ownerProfile: {
    id: number;
    nickName?: string;
    profile: string;
  };
  votedMemberProfiles: VotedMemberProfiles[];
}

export interface VoteInfo {
  id: string;
  title: string;
  ownerProfile: {
    id: number;
    nickName?: string;
    profile: string;
  };
  votedMemberProfiles: VotedMemberProfiles[];
  voteStatus: string; //status요청하기,,
  candidates: CandidatesInfo[];
}
////////////////스웨거//////////////////

export interface VoteBottomButtonProps {
  onClick: () => void;
  title: string;
}

export interface VoteContentProps {
  onBottomSlideOpen: (content: ReactNode) => void;
  data: VoteInfo;
  showResults: boolean;
}

export interface VoteHeaderProps {
  onBottomSlideOpen?: () => void;
  title: string;
  isNoCandidate?: boolean;
}

export interface CandidateCardProps {
  onBottomSlideOpen: (content: ReactNode) => void;
  candidate: CandidatesInfo;
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
  actionButton: string;
  isSmallSize: boolean;
  onClickAction?: () => void;
}

export interface CandidateListProps {
  candidates: CandidatesInfo[];
  onBottomSlideOpen: (content: ReactNode) => void;
  showResults: boolean;
  isCandidateSelecting: boolean;
}

export interface postVoteTitleProps {
  spaceId: number;
  title: string;
}

export interface postVoteTitleProps {
  spaceId: number;
  title: string;
}
