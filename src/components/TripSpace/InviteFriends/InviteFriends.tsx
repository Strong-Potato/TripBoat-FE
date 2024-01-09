import { useState } from "react";

import styles from "./InviteFriends.module.scss";

import CopyClipboard from "@/components/Modal/CopyClipboard/CopyClipboard";

import InviteKakao from "@/assets/inviteKakao.svg?react";
import InviteLink from "@/assets/inviteLink.svg?react";
import InviteLogo from "@/assets/InviteLogo.svg?react";

function InviteFriends() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCopyClick = () => {
    //초대 링크 어떻게 넣을지 고민해보기
    navigator.clipboard.writeText("하하 반갑수다. 우리 같이 여행 갈마씸.");
    setIsModalVisible(true);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 1000);
  };

  return (
    <>
      <div className={styles.container}>
        <InviteLogo className={styles.container__invitelogo} />
        <div className={styles.container__wrapperText}>
          <p className={styles.container__wrapperText__invitetext}>
            친구를 초대해보세요
          </p>
          <p className={styles.container__wrapperText__invitedescription}>
            함께 여행 갈 친구나 가족을 초대해보세요 <br />
            일행은 최대 10명까지 초대할 수 있어요
          </p>
        </div>
        <div className={styles.container__wrapperButton}>
          <button>
            <InviteKakao />
            <p className={styles.container__a11y}>카카오톡 초대</p>
          </button>
          <button onClick={handleCopyClick}>
            <InviteLink />
            <p className={styles.container__a11y}>초대링크 복사</p>
          </button>
        </div>
      </div>
      {isModalVisible && <CopyClipboard />}
    </>
  );
}

export default InviteFriends;
