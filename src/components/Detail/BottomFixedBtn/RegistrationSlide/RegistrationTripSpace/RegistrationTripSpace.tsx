import {useState} from 'react';
import {IoMdArrowDropdown} from 'react-icons/io';
import {IoMdArrowDropup} from 'react-icons/io';
import {useSetRecoilState} from 'recoil';

import styles from './RegistrationTripSpace.module.scss';

import {isRegistrationSelectedState} from '@/recoil/detail/detail';
import tripHome from '@/assets/tripHome.svg';

import {RegistrationTripSpaceProps, Spaces} from '@/types/detail';

function RegistrationTripSpace({tripSelectedId, setTripSelectedId, spaces}: RegistrationTripSpaceProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string>('여행을 선택해주세요');

  const setIsValuedArray = useSetRecoilState<string[]>(isRegistrationSelectedState);

  return (
    <div
      className={`${styles.container} ${isDropped ? styles.containerVisible : ''}`}
      style={{
        border: isDropped ? '1px solid #2388FF' : '1px solid #E3E5E5',
        height: isDropped ? `${6.8 + 6.2 * (spaces ? (spaces.length > 3 ? 3 : spaces.length) : 0) + 1.6}rem` : '6.8rem',
      }}
    >
      {spaces ? (
        <>
          <div
            className={styles.container__select}
            onClick={() => {
              setIsDropped(!isDropped);
            }}
          >
            {isSelected ? (
              <span className={styles.container__select__true}>{selectItem}</span>
            ) : (
              <span className={styles.container__select__false}>{selectItem}</span>
            )}
            {isDropped ? (
              <IoMdArrowDropup fontSize='2.4rem' color='#3F444D' />
            ) : (
              <IoMdArrowDropdown fontSize='2.4rem' color='#CDCFD0' />
            )}
          </div>
          <div className={`${styles.container__itemsBox} ${isDropped ? styles.container__itemsBoxVisible : ''}`}>
            {spaces &&
              spaces.map((data: Spaces) => (
                <div
                  className={`${styles.container__itemsBox__item} ${
                    tripSelectedId === data.id && styles.container__itemsBox__itemSelected
                  }`}
                  onClick={() => {
                    setIsDropped(!isDropped);
                    setIsSelected(true);
                    setSelectItem(data.title);
                    setTripSelectedId(data.id);
                    setIsValuedArray([]);
                  }}
                  key={`spaces_${data.id}`}
                >
                  <div className={styles.container__itemsBox__item__title}>
                    <img
                      src={data.thumbnail ? data.thumbnail : tripHome}
                      alt='#'
                      className={styles.container__itemsBox__item__title__img}
                      style={data.thumbnail ? {borderRadius: '2rem'} : {}}
                    />
                    <div className={styles.container__itemsBox__item__title__spans}>
                      <span>{data.title}</span>
                      <span className={styles.container__itemsBox__item__title__spans__members}>
                        {data.members[0].nickname}
                        {data.members.length > 1 && `외 ${data.members.length - 1}명`}의 여행
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      ) : (
        <div className={styles.container__select}>
          <span className={styles.container__select__false}>여행 없음</span>

          <IoMdArrowDropdown fontSize='2.4rem' color='#CDCFD0' />
        </div>
      )}
    </div>
  );
}

export default RegistrationTripSpace;
