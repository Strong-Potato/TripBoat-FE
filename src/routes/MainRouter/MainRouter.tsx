import { Route, Routes } from "react-router-dom";

import Login from "@/pages/Auth/Login";

import Dashboard from "../Dashboard/Dashboard";
import Home from "../../pages/Home/Home";

function MainRouter() {
  return (
    <Routes>
      <Route element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/carryout" element={<Home />} />
        <Route path="/heart" element={<Home />} />
        <Route path="/user" element={<Home />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default MainRouter;
