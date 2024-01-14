import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { useRecoilState } from "recoil";

import styles from "./RegistrationTripSpace.module.scss";

import { isRegistrationSelectedState } from "@/recoil/detail/detail";

import { RegistrationTripSpaceProps } from "@/types/detail";

function RegistrationTripSpace({
  setIsTripSelected,
}: RegistrationTripSpaceProps) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [isDropped, setIsDropped] = useState<boolean>(false);
  const [selectItem, setSelectItem] = useState<string>("여행을 선택해주세요");
  const [isValuedArray, setIsValuedArray] = useRecoilState<string[]>(
    isRegistrationSelectedState,
  );

  return (
    <div
      className={`${styles.container} ${
        isDropped ? styles.containerVisible : ""
      }`}
      style={{
        border: isDropped ? "1px solid #2388FF" : "1px solid #E3E5E5",
        height: isDropped ? `${6.8 + 6.2 * 3 + 1.6}rem` : "6.8rem",
      }}
    >
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
          <IoMdArrowDropup fontSize="2.4rem" color="#3F444D" />
        ) : (
          <IoMdArrowDropdown fontSize="2.4rem" color="#CDCFD0" />
        )}
      </div>
      <div
        className={`${styles.container__itemsBox} ${
          isDropped ? styles.container__itemsBoxVisible : ""
        }`}
      >
        <div
          className={`${styles.container__itemsBox__item} ${
            selectItem === "강릉 여행" &&
            styles.container__itemsBox__itemSelected
          }`}
          onClick={() => {
            setIsDropped(!isDropped);
            setIsSelected(true);
            setSelectItem("강릉 여행");
            setIsTripSelected(true);
            setIsValuedArray([]);
          }}
        >
          <div className={styles.container__itemsBox__item__title}>
            <img
              src="https://bit.ly/dan-abramov"
              alt="#"
              className={styles.container__itemsBox__item__title__img}
            />
            <span>강릉 여행</span>
          </div>
          <IoMdCheckmark className={styles.container__itemsBox__item__icon} />
        </div>

        <div
          className={`${styles.container__itemsBox__item} ${
            selectItem === "부산 여행" &&
            styles.container__itemsBox__itemSelected
          }`}
          onClick={() => {
            setIsDropped(!isDropped);
            setIsSelected(true);
            setSelectItem("부산 여행");
            setIsTripSelected(true);
            setIsValuedArray([]);
          }}
        >
          <div className={styles.container__itemsBox__item__title}>
            <img
              src="https://bit.ly/dan-abramov"
              alt="#"
              className={styles.container__itemsBox__item__title__img}
            />
            <span>부산 여행</span>
          </div>
          <IoMdCheckmark className={styles.container__itemsBox__item__icon} />
        </div>

        <div
          className={`${styles.container__itemsBox__item} ${
            selectItem === "여행 스페이스 1" &&
            styles.container__itemsBox__itemSelected
          }`}
          onClick={() => {
            setIsDropped(!isDropped);
            setIsSelected(true);
            setSelectItem("여행 스페이스 1");
            setIsTripSelected(true);
            setIsValuedArray([]);
          }}
        >
          <div className={styles.container__itemsBox__item__title}>
            <img
              src="https://bit.ly/dan-abramov"
              alt="#"
              className={styles.container__itemsBox__item__title__img}
            />
            <span>여행 스페이스 1</span>
          </div>
          <IoMdCheckmark className={styles.container__itemsBox__item__icon} />
        </div>
      </div>
    </div>
  );
}

export default RegistrationTripSpace;
