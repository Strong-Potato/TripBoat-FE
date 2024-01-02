import { useRef, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";

import styles from "./VoteAtHome.module.scss";

function CardHaveVote() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [scrollX, setScrollX] = useState(0);

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

  function onDragStart(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    setIsDrag(true);
    if (scrollRef.current) {
      setScrollX(e.pageX + scrollRef.current.scrollLeft);
    }
  }

  function onDragMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (isDrag && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollX - e.pageX;
    }
  }

  function onDragEnd() {
    setIsDrag(false);
  }

  return (
    <div
      className={styles.cardHaveVote}
      ref={scrollRef}
      onMouseMove={
        isDrag
          ? (e) => {
              onDragMove(e);
            }
          : undefined
      }
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      {data.map((e) => {
        return (
          <div className={styles.voteBox} key={e.profile + e.discussion}>
            <div className={styles.contents}>
              <div className={styles.textArea}>
                <p className={styles.voteTitle}>
                  <span>{e.title}</span>
                  <span className={styles.date}>{e.date}</span>
                </p>
                <p className={styles.discussion}>
                  <img className={styles.profile} src="/mapIconHome.png"></img>
                  <span>{e.discussion}</span>
                </p>
              </div>
              <div className={styles.buttonBox}>
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
