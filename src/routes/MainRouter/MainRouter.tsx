import { Route, Routes } from "react-router-dom";

import Alarm from "@/pages/Alarm/Alarm";
import FindPassword from "@/pages/Auth/FindPassword/FindPassword";
import Login from "@/pages/Auth/Login/Login";
import ModifyPassword from "@/pages/Auth/ModifyPassword/ModifyPassword";
import AgreePrivacy from "@/pages/Auth/Signup/Agree/AgreePrivacy";
import AgreeService from "@/pages/Auth/Signup/Agree/AgreeService";
import Signup from "@/pages/Auth/Signup/Signup";
import Withdrawal from "@/pages/Auth/Withdrawal/Withdrawal";
import Calendar from "@/pages/Calendar/Calendar";
import Detail from "@/pages/Detail/Detail";
import Home from "@/pages/Home/Home";
import RegionSearch from "@/pages/RegionSearch/RegionSearch";
import SearchFromHome from "@/pages/SearchFromHome/SearchFromHome";
import Trip from "@/pages/Trip/Trip";
import ModifyProfile from "@/pages/User/ModifyProfile/ModifyProfile";
import MyReview from "@/pages/User/MyReview/MyReview";
import MySpace from "@/pages/User/MySpace/MySpace";
import User from "@/pages/User/User";
import UserPrivacy from "@/pages/User/UserPrivacy/UserPrivacy";
import Vote from "@/pages/Vote/Vote";
import Dashboard from "@/routes/Dashboard/Dashboard";

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/trip" element={<Trip />} />
        <Route path="/heart" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/privacy" element={<UserPrivacy />} />
        <Route path="/user/profile/edit" element={<ModifyProfile />} />
        <Route path="/user/myspace" element={<MySpace />} />
        <Route path="/user/myreview" element={<MyReview />} />
      </Route>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/vote/:id" element={<Vote />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/signup/agree/privacy" element={<AgreePrivacy />} />
      <Route path="/auth/signup/agree/service" element={<AgreeService />} />
      <Route path="/auth/password/find" element={<FindPassword />} />
      <Route path="/auth/password/modify" element={<ModifyPassword />} />
      <Route path="/auth/withdrawal" element={<Withdrawal />} />
      <Route path="/alarm" element={<Alarm />} />
      <Route path="/home/search" element={<SearchFromHome />} />
      <Route path="/trip/selectDate" element={<Calendar />} />
      <Route path="/trip/selectRegion" element={<RegionSearch />} />
    </Routes>
  );
}

export default MainRouter;
