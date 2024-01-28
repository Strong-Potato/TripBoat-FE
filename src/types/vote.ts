import {Dispatch, ReactNode} from 'react';
import {SwiperRef} from 'swiper/react';

import {SearchItemType} from './home';

export interface UserInfo {
  id: number;
  nickName?: string;
  profileImageUrl: string;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface PlaceInfo {
  placeId: number;
  placeName: string;
  contentTypeId: number;
  category: string;
  areaCode: string;
  placeImageUrl: string;
  latLng: LatLng;
}

////////////////INFO//////////////////
export interface CandidatesInfo {
  id: number;
  placeInfo: PlaceInfo;
  createdBy: UserInfo;
  tagline: string;
  amIVote: boolean;
  rank?: number;
  votedMemberProfiles?: UserInfo[];
  voteCount?: number;
}
export interface ResultCandidatesInfo extends CandidatesInfo {
  rank: number;
  votedMemberProfiles: UserInfo[] | undefined;
  voteCount: number;
}

export interface VoteListInfo {
  voteId: number;
  title: string;
  voteStatus: string;
  createdBy: UserInfo;
  votedMemberProfiles: UserInfo[] | undefined;
}

export interface VoteInfo {
  id: number;
  title: string;
  voteStatus: string;
  createdBy: UserInfo;
  candidates: CandidatesInfo[];
}

export interface VoteResultInfo {
  id: number;
  title: string;
  voteStatus: string;
  createdBy: UserInfo;
  candidatesResponses: ResultCandidatesInfo[];
}

////////////////INFO//////////////////

export interface VoteInfoRes {
  status: number;
  message: string;
  data: VoteInfo;
}

export interface VoteListInfoRes {
  status: number;
  message: string;
  data: {
    voteResponse: VoteListInfo[];
    viewResultVoteIds: {
      voteIds: number[] | undefined;
    };
  };
}

export interface VoteResultInfoRes {
  status: number;
  message: string;
  data: VoteResultInfo;
}

export interface VoteBottomButtonProps {
  onClick: () => void;
  title: string;
}

export interface VoteContentProps {
  onBottomSlideOpen: (content: ReactNode) => void;
  data: VoteInfo;
  showResults?: boolean;
}

export interface VoteHeaderProps {
  onBottomSlideOpen?: () => void;
  title: string;
  isZeroCandidates?: boolean;
}

export interface CandidateCardProps {
  onBottomSlideOpen?: (content: ReactNode) => void | undefined;
  candidate: CandidatesInfo;
  isMapStyle?: boolean;
  index?: number;
}

export interface VoteMeatballProps {
  state: string;
  title: string;
  isZeroCandidates: boolean;
  allCandidatesNotVoted: boolean | undefined;
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
  candidates: CandidatesInfo[];
  onBottomSlideOpen: (content: ReactNode) => void;
  isCandidateSelecting: boolean;
}

export interface PostVoteTitleProps {
  spaceId: number;
  title: string;
}

export interface CandidatesSlideProps {
  candidates: CandidatesInfo[];
  setSelectedPinIndex: Dispatch<React.SetStateAction<number>>;
  setCenterMarker: Dispatch<React.SetStateAction<LatLng>>;
  swiperRef: React.RefObject<SwiperRef>;
}

export interface CreateVoteModalProps {
  isEditMode: boolean;
  existingTitle?: string;
}
export interface EditVoteTitleProps {
  title: string;
  voteId: number;
  spaceId: number;
}
export interface DeleteCandidatesProps {
  voteId: number;
  candidateIds: number[];
}

export interface MemoItemProps {
  place: SearchItemType;
  existingTagline?: TaglineType;
}

export interface PostVotingProps {
  voteId: number;
  candidateId: number;
}

export interface TaglineType {
  id: number;
  placeTypeId: number;
  tagline: string;
}

export interface PostNewCandidateProps {
  voteId: number;
  candidateInfos: {
    placeId: number;
    placeTypeId: number;
    tagline: string;
  }[];
}

export interface CandidatesMapBodyProps {
  candidates: CandidatesInfo[] | ResultCandidatesInfo[];
}

export interface VoteRecommendListProps {
  state: string;
  isCandidateSelecting: boolean;
  categoryCode: string;
  onBottomSlideOpen: (content: ReactNode) => void;
}

export interface VoteRecommendItemProps {
  state: string;
  data: SearchItemType;
  onBottomSlideOpen: (content: ReactNode) => void;
}
