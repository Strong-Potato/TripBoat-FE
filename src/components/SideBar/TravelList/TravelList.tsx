import {GoPlus} from 'react-icons/go';
import {useNavigate} from 'react-router-dom';

import styles from './TravelList.module.scss';

import {useGetSpaces, usePostSpace} from '@/hooks/Spaces/useSpaces';

import {setSpaceDate} from '@/utils/formatDate';

import {TravelListProp} from '@/types/sidebar';

function TravelList({isSideOpen}: TravelListProp) {
  const {mutate} = usePostSpace();
  const navigate = useNavigate();

  const {data: spaces} = useGetSpaces(isSideOpen);

  const handlePostSpace = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (spaces && spaces.length >= 15) {
      navigate('/user?full=true');
      // 여행 스페이스 편집 모달 열어야 하나? 확인
    } else {
      mutate(undefined, {
        onSuccess: (data) => {
          if (data) {
            navigate(`/trip/${data.id}`);
          }
        },
      });
    }
  };

  if (!spaces) {
    return <div>로딩 중...</div>;
  }

  return (
    <section className={styles.travelSpaceList}>
      <button className={styles.travelSpaceList__addButton} onClick={handlePostSpace}>
        <GoPlus className={styles.travelSpaceList__addButton__icon} />
        <p className={styles.travelSpaceList__addButton__text}>새 여행 스페이스 만들기</p>
      </button>
      <ul className={styles.travelSpaceList__items}>
        {spaces.map((item, index) => (
          <li key={index}>
            <button className={styles.travelSpaceList__items__item} onClick={() => navigate(`/trip/${item.id}`)}>
              <p className={styles.travelSpaceList__items__item__name}>{item.title}</p>
              <p className={styles.travelSpaceList__items__item__date}>
                {item.startDate && item.endDate ? setSpaceDate(item.startDate, item.endDate) : '날짜 미정'}
              </p>
              <p className={styles.travelSpaceList__items__item__members}>{item.city}</p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TravelList;
