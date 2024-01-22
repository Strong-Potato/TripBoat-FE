import styles from "./MySpace.module.scss";

import Header from "@/components/Auth/Header/Header";
import MySpaceBody from "@/components/MySpaceBody/MySpaceBody";

function MySpace() {
  return (
    <div className={styles.container}>
      <Header content="내 여행 스페이스" />

      <MySpaceBody />
    </div>
  );
}

export default MySpace;
