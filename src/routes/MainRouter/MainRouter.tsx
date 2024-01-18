import { Route, Routes } from "react-router-dom";

import FindPassword from "@/pages/Auth/FindPassword/FindPassword";
import Login from "@/pages/Auth/Login/Login";
import AgreePrivacy from "@/pages/Auth/Signup/Agree/AgreePrivacy";
import AgreeService from "@/pages/Auth/Signup/Agree/AgreeService";
import Signup from "@/pages/Auth/Signup/Signup";
import Calendar from "@/pages/Calendar/Calendar";
import Detail from "@/pages/Detail/Detail";
import Home from "@/pages/Home/Home";
import RegionSearch from "@/pages/RegionSearch/RegionSearch";
import SearchFromHome from "@/pages/SearchFromHome/SearchFromHome";
import Trip from "@/pages/Trip/Trip";
import Vote from "@/pages/Vote/Vote";
import Dashboard from "@/routes/Dashboard/Dashboard";

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/trip/:id" element={<Trip />} />
        <Route path="/heart" element={<Home />} />
        <Route path="/user" element={<Home />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/vote/:id" element={<Vote />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/signup/agreePrivacy" element={<AgreePrivacy />} />
      <Route path="/auth/signup/agreeService" element={<AgreeService />} />
      <Route path="/auth/findpassword" element={<FindPassword />} />
      <Route path="/home/search" element={<SearchFromHome />} />
      <Route path="/trip/selectDate" element={<Calendar />} />
      <Route path="/trip/selectRegion" element={<RegionSearch />} />
    </Routes>
  );
}

export default MainRouter;
