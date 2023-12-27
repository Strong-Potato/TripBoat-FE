import { Route, Routes } from "react-router-dom";

import "./MainRouter.scss";

import Home from "../../pages/Home/Home";

function MainRouter() {
  return (
    <div className="innerContainer">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default MainRouter;
