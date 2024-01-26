import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';

import styles from './MySpaceList.module.scss';

import {useGetSpaces, useGetSpacesOut} from '@/hooks/Spaces/useSpaces';

import defaultCity from '@/assets/icons/city_default.svg';
import spinner from '@/assets/spinner.gif';
import {setSpaceDate} from '@/utils/formatDate';

import {Spaces} from '@/types/sidebar';
import {MySpaceListProps} from '@/types/user';

function MySpaceList({tab}: MySpaceListProps) {
  const {data: upcomingData} = useGetSpaces(true);
  const {data: outdatedData, fetchNextPage} = useGetSpacesOut();
  const [hasNextData, setHasNextData] = useState(true);
  const [ref, inView] = useInView({
    rootMargin: '-56px',
    threshold: 0.8,
  });

  useEffect(() => {
    // inView true + next pages exist
    if (outdatedData) {
      const {last} = outdatedData.pages.at(-1).data;

      if (inView && !last) {
        fetchNextPage();
      }
      if (last) {
        setHasNextData(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <ul className={styles.container}>
      {tab === 'upcoming' &&
        upcomingData?.data.spaces.map(({id, title, startDate, endDate, dueDate, thumbnail}: Spaces) => (
          <li
            key={id}
            onClick={() => {
              // navigate(`/trip/${id}`)
            }}
          >
            <div
              className={`${styles.img} ${thumbnail ? styles.city : styles.default}`}
              style={{
                backgroundImage: `url(${thumbnail ? thumbnail : defaultCity})`,
              }}
            >
              <span>{dueDate <= 0 ? '여행중' : `D-${dueDate}`}</span>
            </div>

            <div className={styles.content}>
              <div className={styles.content__title}>{title}</div>

              <div className={styles.content__date}>{setSpaceDate(startDate, endDate)}</div>
            </div>
          </li>
        ))}

      {tab === 'outdated' &&
        outdatedData?.pages.map((page) =>
          page.data.spaces.map(({id, title, startDate, endDate, thumbnail}: Spaces) => (
            <li
              key={id}
              onClick={() => {
                // navigate(`/trip/${id}`)
              }}
            >
              <div
                className={`${styles.img} ${thumbnail ? styles.city : styles.default}`}
                style={{
                  backgroundImage: `url(${thumbnail ? thumbnail : defaultCity})`,
                }}
              ></div>

              <div className={styles.content}>
                <div className={styles.content__title}>{title}</div>

                <div className={styles.content__date}>{setSpaceDate(startDate, endDate)}</div>
              </div>
            </li>
          )),
        )}

      {tab === 'outdated' && hasNextData && (
        <div className={styles.observeTarget} ref={ref}>
          <img src={spinner} alt='데이터 로딩 중' />
        </div>
      )}
    </ul>
  );
}

export default MySpaceList;
