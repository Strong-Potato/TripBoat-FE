import {useState} from 'react';
import {IoMdArrowDropdown} from 'react-icons/io';
import {IoMdArrowDropup} from 'react-icons/io';
import {IoMdCheckmark} from 'react-icons/io';
import {useSetRecoilState} from 'recoil';

import styles from './RegistrationTripSpace.module.scss';

import {isRegistrationSelectedState} from '@/recoil/detail/detail';

import {RegistrationTripSpaceProps, Spaces} from '@/types/detail';
import nullImg from '@/assets/homeIcons/search/nullImg.svg';

function RegistrationTripSpace({setTripSelected, spaces}: RegistrationTripSpaceProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string>(spaces ? '여행을 선택해주세요' : '여행 없음');
  const setIsValuedArray = useSetRecoilState<string[]>(isRegistrationSelectedState);

  return (
    <div
      className={`${styles.container} ${isDropped ? styles.containerVisible : ''}`}
      style={{
        border: isDropped ? '1px solid #2388FF' : '1px solid #E3E5E5',
        height: isDropped ? `${6.8 + 6.2 * 3 + 1.6}rem` : '6.8rem',
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
                    selectItem === '' && styles.container__itemsBox__itemSelected
                  }`}
                  onClick={() => {
                    setIsDropped(!isDropped);
                    setIsSelected(true);
                    setSelectItem(data.title);
                    setTripSelected(data.title);
                    setIsValuedArray([]);
                  }}
                >
                  <div className={styles.container__itemsBox__item__title}>
                    <img
                      src={data.thumbnail ? data.thumbnail : nullImg}
                      alt='#'
                      className={styles.container__itemsBox__item__title__img}
                    />
                    <span>{data.title}</span>
                  </div>
                  <IoMdCheckmark className={styles.container__itemsBox__item__icon} />
                </div>
              ))}
          </div>
        </>
      ) : (
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
      )}
    </div>
  );
}

export default RegistrationTripSpace;
