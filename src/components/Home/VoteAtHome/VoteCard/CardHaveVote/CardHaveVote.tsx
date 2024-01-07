import { MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./CardHaveVote.module.scss";

import { VoteDataType } from "@/types/home";

interface PropsType {
  data: VoteDataType[];
}

function CardHaveVote(data: PropsType) {
  return (
    <div className={styles.card_have_vote}>
      {data &&
        data.data.map((data, i) => {
          const imageAlt = `${data.title}의 사진`;
          return (
            <div className={styles.vote_box} key={data.profile + i}>
              <div className={styles.contents}>
                <div className={styles.text_box}>
                  <p className={styles.vote_title}>
                    <span>{data.title}</span>
                    <span className={styles.date}>{data.date}</span>
                  </p>
                  <p className={styles.discussion}>
                    <img
                      className={styles.profile}
                      src={data.profile}
                      alt={imageAlt}
                    ></img>
                    <span>{data.discussion}</span>
                  </p>
                </div>
                <Link to={data.voteURL} className={styles.button_box}>
                  <button>
                    투표하기
                    <p>
                      <MdArrowForwardIos />
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CardHaveVote;
