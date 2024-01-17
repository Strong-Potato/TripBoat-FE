import { AiOutlineHeart as WishIcon } from "react-icons/ai";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import { BiTask as VoteIcon } from "react-icons/bi";

import styles from "./AddPlace.module.scss";

function AddPlace() {
  return (
    <>
      <div className={styles.container}>
        <h1>일정 추가하기</h1>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonContainer}>
            <button>
              <SearchIcon color="#979C9E" size="2.4rem" />
            </button>
            <p>장소 검색</p>
          </div>
          <div className={styles.buttonContainer}>
            <button>
              <WishIcon color="#FF85B1" size="2.4rem" />
            </button>
            <p>찜 목록 검색</p>
          </div>
          <div className={styles.buttonContainer}>
            <button>
              <VoteIcon color="#62AAFF" size="2.4rem" />
            </button>
            <p>투표 불러오기</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddPlace;
