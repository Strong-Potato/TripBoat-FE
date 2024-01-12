import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Onboarding.module.scss";

import { closeButton, fireIcon, rank1, rank2, snowIcon } from "./Icons";

interface PropsType {
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

function Onboarding({ set }: PropsType) {
  const [isVote, setIsVote] = useState(false);
  const navigate = useNavigate();

  const data = [
    {
      title: "뜨끈한 온천탕",
      icon: fireIcon,
      percent: "60%",
      rank: rank1,
    },
    {
      title: "눈 내린 스키장",
      icon: snowIcon,
      percent: "40%",
      rank: rank2,
    },
  ];

  function vote() {
    setIsVote(true);
  }

  function exit() {
    set(true);
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <button className={styles.modal__closeButton} onClick={exit}>
          {closeButton}
        </button>
        <img
          src="/onboardingBag.png"
          alt="온보딩 아이콘"
          className={styles.modal__bag}
        />
        <p className={styles.modal__title}>
          <span>겨울여행 어디로 갈까?</span>
        </p>
        <div className={styles.voteBox}>
          {data.map((data) => {
            return (
              <div className={styles.voteBox__item} key={data.title}>
                {isVote && (
                  <>
                    <div
                      className={styles.voteBox__item__graph}
                      style={{ width: data.percent }}
                    >
                      <div />
                    </div>
                    <div className={styles.voteBox__item__rank}>
                      {data.rank}
                    </div>
                  </>
                )}
                <p>
                  {data.title}
                  <span className={styles.voteBox__item__icon}>
                    {data.icon}
                  </span>
                </p>
                {isVote ? (
                  <p className={styles.blue}>{data.percent}</p>
                ) : (
                  <button
                    className={styles.voteBox__item__button}
                    onClick={vote}
                  >
                    <span className={styles.blue}>투표</span>
                  </button>
                )}
              </div>
            );
          })}
        </div>
        <button
          className={styles.modal__voteButton}
          onClick={() => {
            vote();
            navigate("/vote");
          }}
          style={{ height: isVote ? "4.6rem" : 0 }}
        >
          나도 투표만들러 가기
        </button>
        <button className={styles.modal__removeButton} onClick={exit}>
          다시 보지 않기
        </button>
      </div>
    </div>
  );
}

export default Onboarding;
