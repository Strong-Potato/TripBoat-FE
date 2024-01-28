import {useEffect, useState} from 'react';
import {FaRegStar, FaStar} from 'react-icons/fa';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import styles from './CandidateCard.module.scss';

import {usePostVoting} from '@/hooks/Votes/vote';

import CustomToast from '@/components/CustomToast/CustomToast';

import nullImg from '@/assets/homeIcons/search/nullImg.svg';
import FirstIcon from '@/assets/voteIcons/rank_1.svg?react';
import SecondIcon from '@/assets/voteIcons/rank_2.svg?react';
import ThirdIcon from '@/assets/voteIcons/rank_3.svg?react';
import AddDayIcon from '@/assets/voteIcons/vote_addDay.svg?react';
import {journeyState} from '@/recoil/vote/addToJourney';
import {isCandidateSelectingState} from '@/recoil/vote/alertModal';
import {translateAreaCode, translateCategoryName} from '@/utils/translateSearchData';

import AddToJourney from '../../VoteBottomSlideContent/AddToJourney/AddToJourney';
import VotedUserList from '../../VoteBottomSlideContent/VotedUserList/VotedUserList';

import {CandidateCardProps, ResultCandidatesInfo} from '@/types/vote';

const CandidateCard = ({onBottomSlideOpen, candidate, isMapStyle, index, showResults}: CandidateCardProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const spaceId = Number(location.pathname.split('/')[2]);

  const [starIcon, setStarIcon] = useState(<FaRegStar />);
  const isCandidateSelecting = useRecoilValue(isCandidateSelectingState);
  const journeyAtom = useRecoilValue(journeyState);
  const {id: voteId} = useParams();
  const {mutateAsync: votingMutateAsync} = usePostVoting();
  const showToast = CustomToast();
  const placeInfo = candidate.placeInfo;
  const imgSrc = placeInfo.placeImageUrl ? placeInfo.placeImageUrl : nullImg;
  const votedMembers = candidate.votedMemberProfiles;

  useEffect(() => {
    if (candidate.amIVote) {
      setStarIcon(<FaStar style={{color: '#fee500'}} />);
    } else if (isMapStyle) {
      setStarIcon(<FaStar style={{color: '#e3e5e5'}} />);
    } else if (!candidate.amIVote) {
      setStarIcon(<FaRegStar />);
    }
  }, [isMapStyle, candidate.amIVote, candidate]);

  const getRankClassName = (rank: number) => {
    switch (rank) {
      case 1:
        return styles.firstBorder;
      case 2:
        return styles.secondBorder;
      case 3:
        return styles.thirdBorder;
      default:
        return '';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return FirstIcon;
      case 2:
        return SecondIcon;
      case 3:
        return ThirdIcon;
      default:
        return null;
    }
  };

  const rankClassName = candidate.rank && getRankClassName(candidate.rank);
  const RankIcon = candidate.rank && getRankIcon(candidate.rank);

  const onVoteBoxClick = async () => {
    if (showResults && onBottomSlideOpen && votedMembers) {
      onBottomSlideOpen(<VotedUserList votedMembers={votedMembers} />);
    } else {
      await votingMutateAsync({voteId: Number(voteId), candidateId: candidate.id});
    }
  };

  const handleOpenAddToJourney = () => {
    if (journeyAtom && onBottomSlideOpen) {
      onBottomSlideOpen(<AddToJourney placeId={placeInfo.placeId} />);
    } else if (journeyAtom) {
      showToast('날짜를 정하면 일정에 추가할 수 있어요.', true, '바로가기', () => navigate(`/trip/${spaceId}`));
    }
  };

  return (
    <div
      className={`${styles.container} ${rankClassName} candidateCard ${isMapStyle ? styles.isMapStyle : ''}`}
      key={index}
    >
      <img className={styles.placeImg} src={imgSrc} alt={placeInfo.placeName} />
      {RankIcon && (
        <div className={styles.rankTag}>
          <RankIcon />
        </div>
      )}

      <div className={styles.main}>
        <div className={styles.main__contextBox}>
          <button
            className={styles.main__contextBox__name}
            onClick={() => navigate(`/detail/${candidate.id}`)}
            disabled={isCandidateSelecting}
          >
            {placeInfo.placeName.length >= 10 ? placeInfo.placeName.slice(0, 10) + ' ⋯' : placeInfo.placeName}
          </button>

          <div className={styles.main__contextBox__category}>
            {translateCategoryName(placeInfo.category)}
            {'ꞏ'}
            {translateAreaCode(parseInt(placeInfo.areaCode))}
          </div>

          {showResults && onBottomSlideOpen && (
            <button onClick={handleOpenAddToJourney} className={styles.main__contextBox__addDay}>
              <AddDayIcon /> 일정에 담기
            </button>
          )}
        </div>
        <button
          className={`${styles.main__voteBox} ${isCandidateSelecting && styles.isCandidateSelecting}`}
          onClick={onVoteBoxClick}
          disabled={isCandidateSelecting || isMapStyle || isCandidateSelecting}
        >
          <div className={styles.main__voteBox__star}>{starIcon}</div>
          <div className={styles.main__voteBox__vote}>
            {showResults ? (candidate as ResultCandidatesInfo).voteCount : '투표'}
          </div>
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
