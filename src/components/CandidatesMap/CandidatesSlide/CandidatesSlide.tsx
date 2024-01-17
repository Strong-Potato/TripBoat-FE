import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from './CandidatesSlide.module.scss';

import CandidateCard from '@/components/Vote/VoteContent/CandidateCard/CandidateCard';

import {CandidatesInfo} from '@/types/vote';

// import CandidateCard from '@/components/Vote/VoteContent/CandidateCard/CandidateCard';

const CandidatesSlide = ({candidates}: {candidates: CandidatesInfo[]}) => {
  return (
    <div className={styles.container}>
      <Swiper centeredSlides={true} spaceBetween={8} slidesPerView={1} breakpoints={{400: {slidesPerView: 1.2}}}>
        {candidates.map((candidate, i) => (
          <SwiperSlide>
            <CandidateCard candidate={candidate} key={candidate.id} index={i + 1} showResults={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CandidatesSlide;
