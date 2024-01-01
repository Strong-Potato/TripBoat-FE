import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home/Home";

function MainRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
}

export default MainRouter;
