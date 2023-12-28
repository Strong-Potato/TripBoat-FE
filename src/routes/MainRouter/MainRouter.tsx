import { Route, Routes } from "react-router-dom";

import styles from "./MainRouter.module.scss";

import Home from "../../pages/Home/Home";

function MainRouter() {
  return (
    <div className={styles.innerContainer}>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
