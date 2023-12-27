import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default MainRouter;
