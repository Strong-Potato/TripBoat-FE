import styles from "./Detail.module.scss";

import BottomFixedBtn from "@/pages/Detail/BottomFixedBtn/BottomFixedBtn";

import Contents from "./Contents/Contents";
import Main from "./Main/Main";
import Navigation from "./Navigation/Navigation";

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
