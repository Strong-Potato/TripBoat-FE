import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './Contents.module.scss';

import {TabIndexState, TabYPosition} from '@/recoil/detail/detail';

import Information from './Information/Information';
import Reviews from './Reviews/Reviews';
import {placeInfoDataPlace} from '@/types/detail';
// import {useGetReviews} from '@/hooks/Detail/useReviews';
// import {useParams} from 'react-router-dom';
import {useInfiniteScroll, useInfiniteScrollReviews} from '@/hooks/useInfiniteScroll';
import {useGetReviews} from '@/hooks/Detail/useReviews';

interface ContentsProps {
  data: placeInfoDataPlace;
  onOpen: () => void;
  reviewsRating: {
    rating: number;
    userRatingCount: number;
  };
}

function Contents({data, onOpen, reviewsRating}: ContentsProps) {
  const [tabIndex, setTabIndex] = useRecoilState(TabIndexState);
  const setTabPosition = useSetRecoilState(TabYPosition);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const [reviewsData, hasNextData, inViewRef] = useInfiniteScrollReviews(() =>
    useGetReviews(data.id, data.contentTypeId, data.title),
  );

  const reviews: any[] = [];

  if (reviewsData) {
    reviewsData?.pages.map((data: any) => {
      data.data.reviews.map((data: any) => reviews.push(data));
    });
  }

  useEffect(() => {
    const tabRef = document.getElementById('tab');

    if (tabRef) {
      setTabPosition(tabRef.getBoundingClientRect().top + window.scrollY - 56);
    }
  });

  return (
    <Tabs isFitted className={styles.container} index={tabIndex} onChange={handleTabsChange} id='tab'>
      <TabList>
        <Tab
          fontSize='1.4rem'
          fontWeight='700'
          lineHeight='2.2rem'
          color='#CDCFD0'
          borderColor='#fff'
          _selected={{color: '#1D2433', borderColor: '#2388FF'}}
        >
          상품정보
        </Tab>
        <Tab
          fontSize='1.4rem'
          fontWeight='700'
          lineHeight='2.2rem'
          color='#CDCFD0'
          borderColor='#fff'
          _selected={{color: '#1D2433', borderColor: '#2388FF'}}
        >
          리뷰
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel padding='0'>
          <Information onOpen={onOpen} data={data} reviewsRating={reviewsRating} reviews={reviews} />
        </TabPanel>
        <TabPanel padding='0'>
          <Reviews
            hasNextData={hasNextData}
            inViewRef={inViewRef}
            onOpen={onOpen}
            reviewsRating={reviewsRating}
            reviews={reviews}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Contents;
