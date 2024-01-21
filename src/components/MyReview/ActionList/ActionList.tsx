import styles from "./ActionList.module.scss";

import EditIcon from "@/assets/icons/pencil_with_line.svg?react";
import TrashIcon from "@/assets/icons/trash_icon.svg?react";

import { ActionListProps } from "@/types/myReview";

function ActionList({ reviewId }: ActionListProps) {
  return (
    <ul className={styles.container}>
      <li
        onClick={() => {
          console.log(reviewId);
        }}
      >
        <div className={styles.editIcon}>
          <EditIcon />
        </div>
        <p>수정하기</p>
      </li>
      <li
        onClick={() => {
          console.log(reviewId);
        }}
      >
        <div className={styles.editIcon}>
          <TrashIcon />
        </div>
        <p>삭제하기</p>
      </li>
    </ul>
  );
}

export default ActionList;
