import {AiOutlineHeart as WishIcon} from 'react-icons/ai';
import {AiOutlineSearch as SearchIcon} from 'react-icons/ai';
import {BiTask as VoteIcon} from 'react-icons/bi';
import {useNavigate, useParams} from 'react-router-dom';

import styles from './AddPlace.module.scss';

import {AddPlaceProps} from '@/types/route';

function AddPlace({journeyId}: AddPlaceProps) {
  const navigate = useNavigate();
  const {id} = useParams();

  console.log(journeyId);

  return (
    <>
      <div className={styles.container}>
        <h1>일정 추가하기</h1>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => {
                navigate(
                  `/search?keyword=없음&category=0&map=false&location=전국&sort=등록순&hot=false&placeID=여기에넣어줘요&tripDate=여기에넣어줘요`,
                );
              }}
            >
              <SearchIcon color='#979C9E' size='2.4rem' />
            </button>
            <p>장소 검색</p>
          </div>
          <div className={styles.buttonContainer}>
            <button>
              <WishIcon color='#FF85B1' size='2.4rem' />
            </button>
            <p>찜 목록 검색</p>
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={() => navigate(`/trip/${id}/add/vote`, {state: {id: id, journeyId: journeyId}})}>
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
