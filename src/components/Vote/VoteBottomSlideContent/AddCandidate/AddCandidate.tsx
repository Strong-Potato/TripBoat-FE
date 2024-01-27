import {useLocation, useNavigate} from 'react-router-dom';

import styles from './AddCandidate.module.scss';

import VoteHeartIcon from '@/assets/voteIcons/vote_heart.svg?react';
import VoteSearchIcon from '@/assets/voteIcons/vote_search.svg?react';

const AddCandidate = () => {
  const title = '후보 추가하기';
  const navigate = useNavigate();
  const location = useLocation();
  const spaceId = Number(location.pathname.split('/')[2]);
  const voteId = location.pathname.split('/')[4];

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>{title}</div>
      <div className={styles.container__buttons}>
        <button
          className={styles.container__buttons__item}
          onClick={() => {
            navigate(
              `/search?keyword=없음&category=0&map=false&location=전국&sort=등록순&hot=false&placeID=${spaceId}&tripDate=vote ${voteId}`,
            );
          }}
        >
          <VoteSearchIcon />
          <p>장소 검색</p>
        </button>
        <button className={styles.container__buttons__item}>
          <VoteHeartIcon />
          <p>찜 목록 검색</p>
        </button>
      </div>
    </div>
  );
};

export default AddCandidate;
