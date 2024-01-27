import {AiOutlineDownload} from 'react-icons/ai';
import {BiTask} from 'react-icons/bi';
import {Link} from 'react-router-dom';

import styles from './VoteRecommendItem.module.scss';

import nullImg from '@/assets/homeIcons/search/nullImg.svg';
import areas from '@/utils/areas.json';
import titleCaseChange from '@/utils/titleCaseChange';
import {translateCategoryToStr} from '@/utils/translateSearchData';

import {SearchItemType} from '@/types/home';

interface PropsType {
  state: string;
  data: SearchItemType;
}

const VoteRecommendItem = ({state, data}: PropsType) => {
  const location = areas.filter((area) => area.areaCode === data.location.areaCode)[0].name;
  const category = translateCategoryToStr(data.contentTypeId);
  const title = titleCaseChange(data.title);
  const imgSrc = data.thumbnail ? data.thumbnail : nullImg;
  // 이미지, 정보 텍스트 -> 장소상페 이동

  return (
    <div className={styles.container}>
      <Link to='' className={styles.imgBox}>
        <img src={imgSrc} alt={`${data.title}의 사진`} style={{padding: data.thumbnail ? 0 : '40px'}} />
      </Link>

      {state === '결정완료' ? (
        <button>
          <AiOutlineDownload />
          <span>일정에 담기</span>
        </button>
      ) : (
        <button>
          <BiTask />
          <span>후보에 추가</span>
        </button>
      )}

      <div>
        <Link to='' className={styles.textBox}>
          <p className={styles.textBox__name}>{title}</p>
          <p className={styles.textBox__category}>
            {category}·{location}
          </p>
        </Link>
        {/* 해당 인기 장소 불러오는 api에 리뷰 정보가 없습니다 */}
        {/* <div className={styles.reviewBox}>
          <p className={styles.reviewBox__rating}>
            <span className={styles.star}>
              <FaStar />
            </span>
            <span>4.4</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default VoteRecommendItem;
