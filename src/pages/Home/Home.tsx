import VoteAtHome from "@/components/Home/VoteAtHome/VoteAtHome";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <VoteAtHome />
    </div>
  );
}

export default Home;
