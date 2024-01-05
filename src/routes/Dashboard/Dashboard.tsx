import { useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import GlobalNavigationBar from "@/components/GlobalNavigationBar/GlobalNavigationBar";
import SideBar from "@/components/SideBar/SideBar";

function Dashboard() {
  const {
    onOpen: sideOpen,
    isOpen: isSideOpen,
    onClose: sideClose,
  } = useDisclosure();

  return (
    <>
      <button onClick={sideOpen}>Open</button>
      <SideBar isSideOpen={isSideOpen} sideClose={sideClose} />
      <Outlet />
      <GlobalNavigationBar />
    </>
  );
}

export default Dashboard;
