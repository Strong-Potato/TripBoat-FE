import {Button} from '@chakra-ui/react';
import {AiOutlineDownload} from 'react-icons/ai';
import {BiTask} from 'react-icons/bi';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import styles from './VoteRecommendItem.module.scss';

import {usePostNewCandidate} from '@/hooks/Votes/vote';

import CustomToast from '@/components/CustomToast/CustomToast';
import AddToJourney from '@/components/Vote/VoteBottomSlideContent/AddToJourney/AddToJourney';

import nullImg from '@/assets/nullImg.png';
import {journeyState} from '@/recoil/vote/addToJourney';
import {isShowResultsState} from '@/recoil/vote/showResults';
import areas from '@/utils/areas.json';
import titleCaseChange from '@/utils/titleCaseChange';
import {translateCategoryToStr} from '@/utils/translateSearchData';

import {VoteRecommendItemProps} from '@/types/vote';

const VoteRecommendItem = ({state, data, onBottomSlideOpen}: VoteRecommendItemProps) => {
  const locations = useLocation();
  const showToast = CustomToast();
  const navigate = useNavigate();
  const spaceId = Number(locations.pathname.split('/')[2]);
  const voteId = Number(locations.pathname.split('/')[4]);
  const journeyAtom = useRecoilValue(journeyState(spaceId));
  const showResults = useRecoilValue(isShowResultsState(voteId));
  const {isPending, mutateAsync: postCandidateMutateAsync} = usePostNewCandidate();
  const location = areas.filter((area) => area.areaCode === data.location.areaCode)[0].name;
  const category = translateCategoryToStr(data.contentTypeId);
  const title = titleCaseChange(data.title);
  const imgSrc = data.thumbnail ? data.thumbnail : nullImg;

  const handleAddToCandidates = async () => {
    await postCandidateMutateAsync({
      voteId: Number(voteId),
      candidateInfos: [
        {
          placeId: data.id,
          placeTypeId: data.contentTypeId,
          tagline: '',
        },
      ],
    });
  };

  const handleAddToJourney = async () => {
    if (journeyAtom && onBottomSlideOpen) {
      onBottomSlideOpen(<AddToJourney placeId={data.id} />);
    } else if (journeyAtom) {
      showToast('날짜를 정하면 일정에 추가할 수 있어요.', true, '바로가기', () => navigate(`/trip/${spaceId}`));
    }
  };

  return (
    <div className={styles.container}>
      <Link to={`/detail/${data.id} ${data.contentTypeId}?title=${data.title}`} className={styles.imgBox}>
        <img src={imgSrc} alt={`${data.title}의 사진`} style={{padding: data.thumbnail ? 0 : '40px'}} />
      </Link>

      {state === '결정완료' || showResults ? (
        <Button onClick={handleAddToJourney} className={styles.addButton}>
          <AiOutlineDownload />
          <span>일정에 담기</span>
        </Button>
      ) : (
        <Button onClick={handleAddToCandidates} className={styles.addButton} isLoading={isPending}>
          <BiTask />
          <span>후보에 추가</span>
        </Button>
      )}

      <div>
        <Link to={`/detail/${data.id} ${data.contentTypeId}?title=${data.title}`} className={styles.textBox}>
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
