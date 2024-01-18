import {useState} from 'react';
import {FaRegStar, FaStar} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import styles from './CandidateCard.module.scss';

import FirstIcon from '@/assets/voteIcons/rank_1.svg?react';
import SecondIcon from '@/assets/voteIcons/rank_2.svg?react';
import ThirdIcon from '@/assets/voteIcons/rank_3.svg?react';
import AddDayIcon from '@/assets/voteIcons/vote_addDay.svg?react';
import {isCandidateSelectingState} from '@/recoil/vote/alertModal';

import VotedUserList from '../../VoteBottomSlideContent/VotedUserList/VotedUserList';

import {CandidateCardProps} from '@/types/vote';

const CandidateCard = ({onBottomSlideOpen, candidate, showResults, index, isMapStyle}: CandidateCardProps) => {
  const [isVoted, setIsVoted] = useState(false);
  const isCandidateSelecting = useRecoilValue(isCandidateSelectingState);
  const voteCounts = candidate.voteUserId.length;

  const getRankClassName = (index: number) => {
    switch (index) {
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

  const getRankIcon = (index: number) => {
    switch (index) {
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

  const rankClassName = showResults && getRankClassName(index);
  const RankIcon = showResults && getRankIcon(index);

  const onVoteBoxClick = () => {
    if (showResults && onBottomSlideOpen) {
      onBottomSlideOpen(<VotedUserList />);
    } else {
      setIsVoted(!isVoted);
    }
  };

  return (
    <div
      className={`${styles.container} ${rankClassName}`}
      style={isMapStyle ? {width: '33.5rem', height: '12rem'} : {}}
    >
      <img src={candidate.imageURL} alt={candidate.placeName} />
      {RankIcon && (
        <div className={styles.rankTag}>
          <RankIcon />
        </div>
      )}

      <div className={styles.main}>
        <div className={styles.main__contextBox}>
          <Link to='' className={styles.main__contextBox__name}>
            {candidate.placeName} {'>'}
          </Link>

          <div className={styles.main__contextBox__category}>
            {candidate.category}
            {'ꞏ'}
            {candidate.location}
          </div>

          {/* 일정 담기
          날짜를 담고 있어야 함
          없 : 토스트
          있 : 바텀시트 -> 일정 추가api -> 시트close, 완료 토스트
          */}

          {showResults && (
            <button className={styles.main__contextBox__addDay}>
              <AddDayIcon /> 일정에 담기
            </button>
          )}
        </div>
        <button className={styles.main__voteBox} onClick={onVoteBoxClick} disabled={isCandidateSelecting}>
          <div className={styles.main__voteBox__star}>
            {isVoted ? <FaStar style={{color: '#fee500'}} /> : <FaRegStar />}
          </div>
          <div className={styles.main__voteBox__vote}>{showResults ? voteCounts : '투표'}</div>
        </button>
      </div>
    </div>
  );
};

export default CandidateCard;
