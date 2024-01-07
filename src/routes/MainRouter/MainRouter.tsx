import { Route, Routes } from "react-router-dom";

import Detail from "@/pages/Detail/Detail";
import Home from "@/pages/Home/Home";
import AgreePrivacy from "@/pages/Signup/Agree/AgreePrivacy";
import AgreeService from "@/pages/Signup/Agree/AgreeService";
import Dashboard from "@/routes/Dashboard/Dashboard";

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/carryout" element={<Home />} />
        <Route path="/heart" element={<Home />} />
        <Route path="/user" element={<Home />} />
      </Route>
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/signup/agreePrivacy" element={<AgreePrivacy />} />
      <Route path="/signup/agreeService" element={<AgreeService />} />
    </Routes>
  );
}

export default MainRouter;
