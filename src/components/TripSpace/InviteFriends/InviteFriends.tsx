import { useEffect, useState } from "react";

import styles from "./InviteFriends.module.scss";

import { inviteCodeRequest } from "@/hooks/Invite/useInviteCode";
import useKakaoShareButton from "@/hooks/useKakaoShareButton";
import { useGetMyInfo } from "@/hooks/User/useUser";

import CopyClipboard from "@/components/Modal/CopyClipboard/CopyClipboard";

import InviteKakao from "@/assets/inviteKakao.svg?react";
import InviteLink from "@/assets/inviteLink.svg?react";
import InviteLogo from "@/assets/InviteLogo.svg?react";

import { InviteFriendsProps } from "@/types/inviteFriends";

function InviteFriends({ isOpen }: InviteFriendsProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [code, setCode] = useState("");
  const spaceId = window.location.pathname.split("/");
  const { data: myInfo } = useGetMyInfo(isOpen);

  useEffect(() => {
    const fetchInviteCode = async () => {
      if (myInfo && isOpen) {
        try {
          const response = await inviteCodeRequest(myInfo.nickname, spaceId[2]);
          setCode(response.code);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchInviteCode();
  }, [myInfo, isOpen]);

  const handleCopyClick = (code: string) => () => {
    navigator.clipboard.writeText(
      `https://api.tripvote.site/members/join/spaces/${code}`,
    );
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
            함께 여행 갈 친구나 가족을 초대해보세요
            <br />
            일행은 최대 10명까지 초대할 수 있어요
          </p>
        </div>
        <div className={styles.container__wrapperButton}>
          <button onClick={useKakaoShareButton(code)} id="kakaoShareButton">
            <InviteKakao />
            <p className={styles.container__a11y}>카카오톡 초대</p>
          </button>
          <button onClick={handleCopyClick(code)}>
            <InviteLink />
            <p className={styles.container__a11y}>초대링크 복사</p>
          </button>
        </div>
        {isModalVisible && <CopyClipboard />}
      </div>
    </>
  );
}

export default InviteFriends;
