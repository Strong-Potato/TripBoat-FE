import styles from "./Withdrawal.module.scss";

import AuthButton from "@/components/Auth/Button/AuthButton";
import Header from "@/components/Auth/Header/Header";

function Withdrawal() {
  const onClickButton = () => {
    // 회원탈퇴 api
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.body}>
        <h2>
          트립보트를 떠나신다니
          <br />
          아쉬워요
          <span className={styles.imoji}></span>
        </h2>

        <section className={styles.desc}>
          <p>탈퇴시 삭제되는 정보를 확인하세요.</p>
          <p>한번 삭제된 정보는 복구가 불가능합니다.</p>
        </section>

        <div className={styles.bar}></div>

        <ul className={styles.removeList}>
          <li>1. 계정 및 프로필 정보</li>
          <li>2. 내 여행 스페이스 투표 및 일정</li>
          <li>3. 저장된 찜 목록 관련 정보</li>
          <li>4. 내가 작성한 리뷰</li>
        </ul>

        <AuthButton
          content="탈퇴합니다"
          disabled={false}
          onClick={onClickButton}
          type="button"
        />
      </main>
    </div>
  );
}

export default Withdrawal;
