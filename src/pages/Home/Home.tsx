import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

import styles from "./Home.module.scss";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

import Onboarding from "@/components/Home/Onboarding/Onboarding";
import RecommendedItemList from "@/components/Home/RecommendedItemList/RecommendedItemList";
import RecommendedLocationList from "@/components/Home/RecommendedLocationList/RecommendedLocationList";
import SearchBarAtHome from "@/components/Home/SearchBarAtHome/SearchBarAtHome";
import TabBar from "@/components/Home/TabBar/TabBar";
import TripSpaceAtHome from "@/components/Home/TripSpaceAtHome/TripSpaceAtHome";
import VoteAtHome from "@/components/Home/VoteAtHome/VoteAtHome";
import Invitation from "@/components/Modal/Invitation/Invitation";

function Home() {
  const [onboarding, setOnboarding] = useState(false);
  const [cookies] = useCookies(["inviteCode", "isLogin"]);
  const [modal, setModal] = useState(false);
  useLockBodyScroll(modal);

  useEffect(() => {
    if (cookies.inviteCode) {
      setModal(true);
    }
  }, [cookies.inviteCode]);

  return (
    <div className={styles.container}>
      <TabBar />
      <VoteAtHome />
      <SearchBarAtHome />
      <div className={styles.column_4px}>
        <p className={styles.title}>내 여행 일정</p>
        <TripSpaceAtHome />
      </div>
      <div className={styles.lists_box}>
        <div className={styles.column_8px}>
          <p className={styles.title}>지금 인기있는 여행지는?</p>
          <RecommendedLocationList />
        </div>
        <div className={styles.column_8px}>
          <p className={styles.title}>겨울에 어울리는 포근한 숙소</p>
          <RecommendedItemList apiNum={1} />
        </div>
        <div className={styles.column_8px}>
          <p className={styles.title}>겨울을 신나게 즐기는 쌈박한 방법!</p>
          <RecommendedItemList apiNum={2} />
        </div>
      </div>
      {!onboarding && <Onboarding set={setOnboarding} />}
      {modal && (
        <Invitation
          inviteCode={cookies.inviteCode}
          isLogin={cookies.isLogin}
          modal={setModal}
        />
      )}
    </div>
  );
}

export default Home;
