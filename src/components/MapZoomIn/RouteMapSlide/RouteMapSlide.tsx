import {Swiper, SwiperClass, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from './RouteMapSlide.module.scss';

import PlaceCard from '@/components/Route/PlaceCard/PlaceCard';

import {RouteMapSlideProps} from '@/types/route';

const RouteMapSlide = ({
  journeys,
  setSelectedPinIndex,
  setCenterMarker,
  swiperRef,
  activeDay,
  onDayChange,
}: RouteMapSlideProps) => {
  const dates = journeys.map((journey) => journey.date);

  const handleSlideChange = (swiper: SwiperClass) => {
    const activeJourney = journeys[activeDay];
    const center = {
      lat: activeJourney.places[swiper.activeIndex].place.latitude,
      lng: activeJourney.places[swiper.activeIndex].place.longitude,
    };
    setCenterMarker(center);
    setSelectedPinIndex(swiper.activeIndex);
  };

  return (
    <div className={styles.container}>
      <div className={styles.daysButtonContainer}>
        {dates.map((_, i) => (
          <button
            key={`day${i}-button`}
            className={activeDay === i ? styles.activeDayButton : styles.inactiveDayButton}
            onClick={() => onDayChange(i)}
          >
            day {i + 1}
          </button>
        ))}
      </div>
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        spaceBetween={8}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        breakpoints={{400: {slidesPerView: 1.2}}}
      >
        {journeys[activeDay].places.map((place, j) => (
          <SwiperSlide key={`${journeys[activeDay].journeyId}-${j}`} className={styles.swiperSlideItem}>
            <PlaceCard
              key={`${journeys[activeDay].journeyId}-${place.selectedId}-${j}`}
              order={j + 1}
              name={place.place.title}
              category={place.place.category}
              address={place.place.address}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RouteMapSlide;
