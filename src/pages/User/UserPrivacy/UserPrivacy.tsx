import { Link } from "react-router-dom";

import styles from "./UserPrivacy.module.scss";

import Header from "@/components/Auth/Header/Header";

const userInfo = {
  email: "test@gmail.com",
};

function UserPrivacy() {
  return (
    <div className={styles.container}>
      <Header content="계정 관리" />

      <ul className={styles.userPrivacy}>
        <li className={styles.userPrivacy__email}>
          <div>트립보트 계정 이메일</div>
          <small>{userInfo.email}</small>
        </li>

        <li className={styles.userPrivacy__password}>
          <div>비밀번호</div>
          <Link to="/">재설정</Link>
        </li>

        <li
          onClick={() => {
            // 로그아웃 api 호출 (백엔드 미완성)
          }}
        >
          로그아웃
        </li>

        <li>
          <Link to="/">회원 탈퇴</Link>
        </li>
      </ul>
    </div>
  );
}

export default UserPrivacy;
