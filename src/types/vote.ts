import {Dispatch, ReactNode} from 'react';
import {SwiperRef} from 'swiper/react';

import {SearchItemType} from './home';

interface UserInfo {
  id: number;
  nickName?: string;
  profileImageUrl: string;
}

export interface Latlng {
  lat: number;
  lng: number;
}

export interface PlaceInfo {
  placeId: number;
  placeName: string;
  category: string;
  areaCode: string;
  placeImageURL: string;
  latlng: Latlng;
}

////////////////INFO//////////////////
export interface CandidatesInfo {
  id: number;
  placeInfo: PlaceInfo;
  createdBy: UserInfo;
  tagline: string;
  amIVote: boolean;
  //임시
  votedMemberProfiles?: UserInfo[];
  voteCount?: number;
}
interface ResultCandidatesInfo extends CandidatesInfo {
  votedMemberProfiles?: UserInfo[];
  voteCount: number;
}

export interface VoteListInfo {
  voteId: number;
  title: string;
  voteStatus: string;
  createdBy: UserInfo;
  votedMemberProfiles: UserInfo[];
}

export interface VoteInfo {
  id: number;
  title: string;
  voteStatus: string;
  createdBy: UserInfo;
  candidates: CandidatesInfo[];
  //
  votedMemberProfiles?: UserInfo[]; //빠짐
}

export interface VoteResultInfo {
  id: number;
  title: string;
  voteStatus: string;
  createdBy: UserInfo; // 이름 통일 요청
  candidates: ResultCandidatesInfo[];
}

////////////////INFO//////////////////

export interface VoteInfoRes {
  status: number;
  message: string;
  data: VoteInfo;
}

export interface VoteBottomButtonProps {
  onClick: () => void;
  title: string;
}

export interface VoteContentProps {
  onBottomSlideOpen: (content: ReactNode) => void;
  data: VoteInfo;
  showResults: boolean;
  isZeroCandidates: boolean;
}

export interface VoteHeaderProps {
  onBottomSlideOpen?: () => void;
  title: string;
  isZeroCandidates?: boolean;
}

export interface CandidateCardProps {
  onBottomSlideOpen?: (content: ReactNode) => void | undefined;
  candidate: CandidatesInfo;
  index: number;
  isMapStyle?: boolean;
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
  setCenterMarker: Dispatch<React.SetStateAction<Latlng>>;
  swiperRef: React.RefObject<SwiperRef>;
}

export interface CreateVoteModalProps {
  isEditMode: boolean;
  existingTitle?: string;
}
export interface EditVoteTitleProps {
  title: string;
  voteId: number;
}
export interface DeleteCandidatesProps {
  voteId: number;
  candidateIds: number[];
}

export interface TaglineType {
  id: number;
  tagline: string;
}

export interface MemoItemProps {
  place: SearchItemType;
  existingTagline?: TaglineType;
}

export interface PostVotingProps {
  voteId: number;
  candidateId: number;
}

export interface PostNewCandidateProps {
  voteId: number;
  candidateInfos: {
    placeId: number;
    placeTypeId: number;
    tagline: string;
  }[];
}
