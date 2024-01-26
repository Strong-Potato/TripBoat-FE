import {useState} from 'react';
import {MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';

import styles from './CardHaveVote.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import {setSpaceDate_DOW} from '@/utils/formatDate';

import {Vote} from '@/types/home';

interface PropsType {
  data: Vote;
}

function CardHaveVote({data}: PropsType) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();
  return (
    <div className={styles.container}>
      <SlideButton
        slideLocation={slideLocation}
        setSlideLocation={setSlideLocation}
        itemWidth={308}
        flexGap={8}
        itemNumber={data.voteResponse.length}
        slideSize={size}
      />
      <div
        className={styles.slide_box}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? 'scroll' : 'visible',
          left: slideLocation + 'px',
        }}
      >
        {data &&
          data.voteResponse.map((data) => {
            const date = setSpaceDate_DOW(data.spaceInfo.startDate, data.spaceInfo.endDate);

            return (
              <div className={styles.vote_box} key={data.voteId}>
                <div className={styles.contents}>
                  <div className={styles.text_box}>
                    <p className={styles.vote_title}>
                      <span>{data.spaceInfo.title}</span>
                      <span>{date}</span>
                    </p>
                    <p className={styles.discussion}>
                      <img
                        className={styles.profile}
                        src={data.createdBy.profileImageUrl}
                        alt={`${data.title}의 사진`}
                      ></img>
                      <span>{data.title}</span>
                    </p>
                  </div>
                  <Link to={`/votes/${data.voteId}`} className={styles.button_box}>
                    <button>
                      투표하기
                      <p>
                        <MdArrowForwardIos />
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default CardHaveVote;
