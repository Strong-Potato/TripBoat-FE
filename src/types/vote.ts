import {Dispatch, ReactNode} from 'react';
import {SwiperRef} from 'swiper/react';

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
  location?: string; // 빠짐
  placeImageURL: string;
  latlng: Latlng;
}

////////////////INFO//////////////////
export interface CandidatesInfo {
  id: number;
  placeInfo: PlaceInfo;
  createdBy: UserInfo;
  tagline: string;
  amIVoted: boolean;
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
  ownerProfile: UserInfo; // 이름 통일 요청
  candidates: ResultCandidatesInfo[];
}

////////////////INFO//////////////////

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
  showResults: boolean;
  index: number;
  isMapStyle?: boolean;
}

export interface VoteMeatballProps {
  state: string;
  title: string;
  isZeroCandidates: boolean;
  allCandidatesNotVoted: boolean;
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
  showResults: boolean;
  isCandidateSelecting: boolean;
}

export interface PostVoteTitleProps {
  spaceId: number;
  title: string;
}

//get아니고 후보메모post
export interface PostNewCandidateProps {
  voteId: number;
  candidates: {
    placeId: number;
    tagline: string;
  }[];
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
  candidateId: number[];
}

export interface TaglineType {
  placeId: number;
  tagline: string;
}
