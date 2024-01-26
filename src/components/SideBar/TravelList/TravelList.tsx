import {GoPlus} from 'react-icons/go';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import styles from './TravelList.module.scss';

import {useGetSpaces, usePostSpace} from '@/hooks/Spaces/useSpaces';

import {isFullMember} from '@/recoil/fullmember/fullmember';
import {setSpaceDate} from '@/utils/formatDate';

import {TravelListProp} from '@/types/sidebar';

function TravelList({isSideOpen}: TravelListProp) {
  const [, setIsFull] = useRecoilState(isFullMember);
  const {mutate} = usePostSpace();
  const navigate = useNavigate();

  const {data: spaces} = useGetSpaces(isSideOpen);
  console.log(spaces);

  const handlePostSpace = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (spaces!.data && spaces!.data.spaces.length >= 15) {
      setIsFull(true);
    } else {
      mutate(undefined, {
        onSuccess: (data) => {
          if (data) {
            navigate(`/trip/${data.data.id}`);
          }
        },
      });
    }
  };

  if (!spaces) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <section className={styles.travelSpaceList}>
        <button className={styles.travelSpaceList__addButton} onClick={handlePostSpace}>
          <GoPlus className={styles.travelSpaceList__addButton__icon} />
          <p className={styles.travelSpaceList__addButton__text}>새 여행 스페이스 만들기</p>
        </button>
        <ul className={styles.travelSpaceList__items}>
          {spaces.data.spaces.map((item, index) => (
            <li key={index}>
              <button className={styles.travelSpaceList__items__item} onClick={() => navigate(`/trip/${item.id}`)}>
                <p className={styles.travelSpaceList__items__item__name}>
                  {item.city ? item.city : `여행 스페이스 ${item.id}`}
                </p>
                <p className={styles.travelSpaceList__items__item__date}>
                  {item.startDate && item.endDate ? setSpaceDate(item.startDate, item.endDate) : '날짜 미정'}
                </p>
                <p className={styles.travelSpaceList__items__item__members}>{item.title}</p>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default TravelList;
