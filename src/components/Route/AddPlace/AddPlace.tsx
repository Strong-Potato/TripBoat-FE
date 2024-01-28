import {AiOutlineHeart as WishIcon} from 'react-icons/ai';
import {AiOutlineSearch as SearchIcon} from 'react-icons/ai';
import {BiTask as VoteIcon} from 'react-icons/bi';
import {useNavigate, useParams} from 'react-router-dom';

import styles from './AddPlace.module.scss';

import {AddPlaceProps} from '@/types/route';

function AddPlace({journeyId, day}: AddPlaceProps) {
  const navigate = useNavigate();
  const {id: spaceId} = useParams();

  return (
    <>
      <div className={styles.container}>
        <h1>일정 추가하기</h1>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => {
                navigate(
                  `/search?keyword=없음&category=0&map=false&location=전국&sort=등록순&hot=false&placeID=${spaceId}&tripDate=trip ${journeyId}`,
                );
              }}
            >
              <SearchIcon color='#979C9E' size='2.4rem' />
            </button>
            <p>장소 검색</p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => {
                navigate(
                  `/wishes/bring?category=0&location=전국&sort=등록순&placeID=${spaceId}&tripDate=trip ${journeyId}`,
                );
              }}
            >
              <WishIcon color='#FF85B1' size='2.4rem' />
            </button>
            <p>찜 목록 검색</p>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() =>
                navigate(`/trip/${spaceId}/add/vote`, {state: {id: spaceId, journeyId: journeyId, day: day}})
              }
            >
              <VoteIcon color='#62AAFF' size='2.4rem' />
            </button>
            <p>투표 불러오기</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPlace;
