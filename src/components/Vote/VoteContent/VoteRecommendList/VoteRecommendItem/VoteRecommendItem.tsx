import {AiOutlineDownload} from 'react-icons/ai';
import {BiTask} from 'react-icons/bi';
import {FaStar} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import styles from './VoteRecommendItem.module.scss';

const VoteRecommendItem = ({state}: {state: string}) => {
  // 이미지, 정보 텍스트 -> 장소상페 이동

  return (
    <div className={styles.container}>
      <Link to='' className={styles.imgBox}>
        <img src='https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg' />
      </Link>

      <button>
        {state === '결정완료' ? (
          <>
            <AiOutlineDownload />
            <span>일정에 담기</span>
          </>
        ) : (
          <>
            <BiTask />
            <span>후보에 추가</span>
          </>
        )}
      </button>
      <div>
        <Link to='' className={styles.textBox}>
          <p className={styles.textBox__name}>카페 리젠트마린</p>
          <p className={styles.textBox__category}>카페·제주</p>
        </Link>
        <div className={styles.reviewBox}>
          <p className={styles.reviewBox__rating}>
            <span className={styles.star}>
              <FaStar />
            </span>
            <span>4.4</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoteRecommendItem;
