import {useNavigate} from 'react-router-dom';

import styles from './MySpaceList.module.scss';

import {useGetSpaces, useGetSpacesOut} from '@/hooks/Spaces/useSpaces';
import {useInfiniteScroll} from '@/hooks/useInfiniteScroll';

import ObserveTarget from '@/components/Route/ObserveTarget/ObserveTarget';

import defaultCity from '@/assets/icons/city_default.svg';
import {setSpaceDate} from '@/utils/formatDate';

import {Spaces} from '@/types/sidebar';
import {MySpaceListProps} from '@/types/user';

function MySpaceList({tab}: MySpaceListProps) {
  const {data: upcomingData} = useGetSpaces(true);
  const [outdatedData, hasNextData, inViewRef] = useInfiniteScroll(useGetSpacesOut);
  const navigate = useNavigate();

  return (
    <ul className={styles.container}>
      {tab === 'upcoming' &&
        upcomingData?.data.spaces.map(({id, title, startDate, endDate, dueDate, thumbnail}: Spaces) => (
          <li
            key={id}
            onClick={() => {
              navigate(`/trip/${id}`);
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
                navigate(`/trip/${id}`);
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

      {tab === 'outdated' && hasNextData && <ObserveTarget inViewRef={inViewRef} />}
    </ul>
  );
}

export default MySpaceList;
