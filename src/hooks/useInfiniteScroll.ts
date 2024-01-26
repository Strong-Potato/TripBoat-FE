import {InfiniteData, UseInfiniteQueryResult} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const useInfiniteScroll = (infiniteQueryFn: () => UseInfiniteQueryResult<InfiniteData<any, unknown>, Error>) => {
  const {data, fetchNextPage} = infiniteQueryFn();
  const [hasNextData, setHasNextData] = useState(true);
  const {ref: inViewRef, inView} = useInView({
    rootMargin: '0px 0px -56px 0px',
    threshold: 1,
  });

  useEffect(() => {
    if (data) {
      const {last} = data.pages.at(-1).data;

      if (inView && !last) {
        fetchNextPage();
      }
      if (last) {
        setHasNextData(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return [data, hasNextData, inViewRef] as const;
};
