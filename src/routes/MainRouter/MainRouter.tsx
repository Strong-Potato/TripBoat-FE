import { Route, Routes } from "react-router-dom";

import styles from "./MainRouter.module.scss";

import Home from "../../pages/Home/Home";
import VoteDetail from "../../pages/VoteDetail/VoteDetail";

function MainRouter() {
  return (
    <div className={styles.innerContainer}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="voteDetail" element={<VoteDetail />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
