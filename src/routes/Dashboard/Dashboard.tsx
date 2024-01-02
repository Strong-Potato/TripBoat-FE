import { Outlet } from "react-router-dom";

import GlobalNavigationBar from "../../components/GlobalNavigationBar/GlobalNavigationBar";

function Dashboard() {
  return (
    <>
      <Outlet />
      <GlobalNavigationBar />
    </>
  );
}

export default Dashboard;
