import styles from "./Detail.module.scss";

import BottomFixedBtn from "@/components/Detail/BottomFixedBtn/BottomFixedBtn";
import Contents from "@/components/Detail/Contents/Contents";
import Main from "@/components/Detail/Main/Main";
import Navigation from "@/components/Detail/Navigation/Navigation";

function Detail() {
  return (
    <div className={styles.container}>
      <Navigation />
      <Main />
      <Contents />
      <BottomFixedBtn />
    </div>
  );
}

export default Detail;
