import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./CardNull.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

function CardNull() {
  const [componentRef, size] = useComponentSize();
  const responsivePadding = size.width - 360 <= 0 ? 0 : size.width - 360;
  const contentsPadding = `32.5px ${responsivePadding / 5 + 24}px`;

  return (
    <div className={styles.vote_box} ref={componentRef}>
      <div className={styles.contents} style={{ padding: contentsPadding }}>
        <div className={styles.left}>
          <p className={styles.text}>
            친구들과 함께
            <br />
            여행 장소를 정해보세요
          </p>
          <Link to="/voteDetail">
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
