import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { useRecoilState } from "recoil";

import styles from "./RegistrationListItem.module.scss";

import { isRegistrationSelectedState } from "@/recoil/detail/detail";

import { RegistrationListItemProps } from "@/types/detail";

// 투표리스트 item id값으로 title을 대체해야 함
function RegistrationListItem({
  title,
  isSelectedProps,
}: RegistrationListItemProps) {
  const [isValuedArray, setIsValuedArray] = useRecoilState<string[]>(
    isRegistrationSelectedState,
  );
  const [isSelected, setIsSelected] = useState<boolean>(
    isValuedArray.includes(title),
  );

  return (
    <div
      className={`${styles.container} ${
        !isSelectedProps && isSelected ? styles.selected : ""
      }
      ${isSelectedProps ? styles.isSelectedProps : ""}`}
      onClick={() => {
        if (!isSelectedProps) {
          if (!isValuedArray.includes(title)) {
            setIsValuedArray([...isValuedArray, title]);
          } else {
            const arr = [...isValuedArray];
            arr.splice(isValuedArray.indexOf(title), 1);

            setIsValuedArray([...arr]);
          }

          setIsSelected(!isSelected);
        }
      }}
    >
      <span>{title}</span>
      {isSelectedProps ? (
        <span className={styles.container__isSelected}>이미 등록됨</span>
      ) : (
        <IoMdCheckmark fontSize="2.4rem" />
      )}
    </div>
  );
}

export default RegistrationListItem;
