import CardNull from "./VoteCard/CardNull/CardNull";
import CardHaveVote from "./VoteCard/CardHaveVote/CardHaveVote";
import styles from "./VoteAtHome.module.scss";

function VoteAtHome() {
  const login = true;

  return (
    <div className={styles.container}>
      {login ? (
        <p className={styles.title}>
          길동님,
          <br />
          진행 중인 투표가 있어요!
        </p>
      ) : (
        <p className={styles.title}>
          여행 계획 중이라면
          <br />
          트립보트에서 투표해볼까요?
        </p>
      )}

      {login ? <CardHaveVote /> : <CardNull />}
    </div>
  );
}

export default VoteAtHome;
