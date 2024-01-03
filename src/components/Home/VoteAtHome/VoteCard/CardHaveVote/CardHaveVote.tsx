import { MdArrowForwardIos } from "react-icons/md";

import styles from "./CardHaveVote.module.scss";

function CardHaveVote() {
  const data = [
    {
      title: "부산, 여수 여행",
      date: "1.17-1.19",
      profile: "",
      discussion: "첫째 날 카페 어디갈래?",
    },
    {
      title: "부산, 여수 여행",
      date: "1.17-1.19",
      profile: "",
      discussion: "둘째 날 카페 어디갈래?",
    },
    {
      title: "부산, 여수 여행",
      date: "1.17-1.19",
      profile: "",
      discussion: "셋째 날 카페 어디갈래?",
    },
  ];

  return (
    <div className={styles.cardHaveVote}>
      {data.map((e) => {
        return (
          <div className={styles.vote_box} key={e.profile + e.discussion}>
            <div className={styles.contents}>
              <div className={styles.text_box}>
                <p className={styles.vote_title}>
                  <span>{e.title}</span>
                  <span className={styles.date}>{e.date}</span>
                </p>
                <p className={styles.discussion}>
                  <img className={styles.profile} src="/mapIconHome.png"></img>
                  <span>{e.discussion}</span>
                </p>
              </div>
              <div className={styles.button_box}>
                <button>
                  투표하기
                  <p className={styles.arrow}>
                    <MdArrowForwardIos />
                  </p>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardHaveVote;
