import { Route, Routes } from "react-router-dom";

import Alarm from "@/pages/Alarm/Alarm";
import Detail from "@/pages/Detail/Detail";
import Home from "@/pages/Home/Home";
import Dashboard from "@/routes/Dashboard/Dashboard";
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
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/alarm" element={<Alarm />} />
    </Routes>
  );
}

export default MainRouter;
