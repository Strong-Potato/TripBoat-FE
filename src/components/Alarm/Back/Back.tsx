import { AiOutlineLeft } from "react-icons/ai";

import styles from "./Back.module.scss";

import { BackProps } from "@/types/alarm";

function Back({ alarmClose }: BackProps) {
  return (
    <div className={styles.container}>
      <button onClick={alarmClose} className={styles.container__button}>
        <div>
          <AiOutlineLeft />
        </div>
        <p>알림</p>
      </button>
    </div>
  );
}

export default Back;
