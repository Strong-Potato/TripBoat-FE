import {useLocation} from 'react-router-dom';
import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from './CandidatesSlide.module.scss';

import CandidateCard from '@/components/Vote/VoteContent/CandidateCard/CandidateCard';

import {CandidatesSlideProps} from '@/types/vote';

const CandidatesSlide = ({candidates, setSelectedPinIndex, setCenterMarker, swiperRef}: CandidatesSlideProps) => {
  const location = useLocation();
  const voteId = Number(location.pathname.split('/')[4]);
  // const showResults = useRecoilValue(isShowResultsState(voteId));

  const handleSlideChange = (swiper: SwiperClass) => {
    const activeCandidate = candidates[swiper.activeIndex];
    setCenterMarker(activeCandidate.placeInfo.latLng);
    setSelectedPinIndex(swiper.activeIndex);
  };

  // console.log('showResults', showResults);

  return (
    <div className={styles.container}>
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        spaceBetween={8}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        breakpoints={{400: {slidesPerView: 1.2}}}
      >
        {candidates.map((candidate, i) => (
          <SwiperSlide key={`${candidate.id}-${i}`}>
            <CandidateCard isMapStyle={true} candidate={candidate} index={i + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CandidatesSlide;
