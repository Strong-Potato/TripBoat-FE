import { Route, Routes } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import Home from "../../pages/Home/Home";
import VoteDetail from "../../pages/VoteDetail/VoteDetail";

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/carryout" element={<Home />} />
        <Route path="/heart" element={<Home />} />
        <Route path="/user" element={<Home />} />
      </Route>
      <Route path="voteDetail" element={<VoteDetail />} />
    </Routes>
  );
}

export default MainRouter;
