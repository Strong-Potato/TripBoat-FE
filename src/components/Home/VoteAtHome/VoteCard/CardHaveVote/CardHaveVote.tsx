import {useState} from 'react';
import {MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';

import styles from './CardHaveVote.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import {VoteDataType} from '@/types/home';

interface PropsType {
  data: VoteDataType[];
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
        itemNumber={data.length}
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
          data.map((data, i) => {
            const imageAlt = `${data.title}의 사진`;
            return (
              <div className={styles.vote_box} key={data.profile + i}>
                <div className={styles.contents}>
                  <div className={styles.text_box}>
                    <p className={styles.vote_title}>
                      <span>{data.title}</span>
                      <span>{data.date}</span>
                    </p>
                    <p className={styles.discussion}>
                      <img className={styles.profile} src={data.profile} alt={imageAlt}></img>
                      <span>{data.discussion}</span>
                    </p>
                  </div>
                  <Link to={data.voteURL} className={styles.button_box}>
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
