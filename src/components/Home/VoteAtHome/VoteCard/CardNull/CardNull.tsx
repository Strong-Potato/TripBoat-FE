import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./CardNull.module.scss";

function CardNull() {
  return (
    <div className={styles.vote_box}>
      <div className={styles.contents}>
        <div className={styles.left}>
          <p className={styles.text}>
            친구들과 함께
            <br />
            여행 장소를 정해보세요
          </p>
          <Link to="/vote">
            <button>
              <span>투표 만들기</span>
              <p>
                <MdArrowForwardIos />
              </p>
            </button>
          </Link>
        </div>
        <img className={styles.right} src="/mapIconHome.png"></img>
      </div>
    </div>
  );
}

export default CardNull;
