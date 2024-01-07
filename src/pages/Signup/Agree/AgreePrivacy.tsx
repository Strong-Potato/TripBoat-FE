import styles from "./Agree.module.scss";

import Header from "@/components/Signup/Header/Header";

function AgreePrivacy() {
  return (
    <div className={styles.container}>
      <Header content="[필수] 개인정보 수집 및 이용 동의" />

      <h2>트립보트 개인정보 처리 방침</h2>
    </div>
  );
}

export default AgreePrivacy;
