import { AiOutlineLeft } from "react-icons/ai";

import styles from "./Back.module.scss";

import useGoBack from "@/hooks/useGoBack";
function Back() {
  const goBack = useGoBack();
  return (
    <div className={styles.container}>
      <button onClick={goBack} className={styles.container__button}>
        <div>
          <AiOutlineLeft />
        </div>
        <p>알림</p>
      </button>
    </div>
  );
}

export default Back;
