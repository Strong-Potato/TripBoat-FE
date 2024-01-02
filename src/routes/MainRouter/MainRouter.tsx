import { Route, Routes } from "react-router-dom";

import Dashboard from "../Dashboard/Dashboard";
import Home from "../../pages/Home/Home";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path="/carryout" element={<Home />} />
        <Route path="/heart" element={<Home />} />
        <Route path="/user" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;
