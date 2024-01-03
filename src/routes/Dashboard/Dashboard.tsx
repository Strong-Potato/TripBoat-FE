import { useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

import GlobalNavigationBar from "@/components/GlobalNavigationBar/GlobalNavigationBar";
import SideBar from "@/components/SideBar/SideBar";

function Dashboard() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <>
      <button onClick={onOpen}>Open</button>
      <SideBar isOpen={isOpen} onClose={onClose} />
      <Outlet />
      <GlobalNavigationBar />
    </>
  );
}

export default Dashboard;
