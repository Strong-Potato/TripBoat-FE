import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

import GlobalNavigationBar from "@/components/GlobalNavigationBar/GlobalNavigationBar";
import SideBar from "@/components/SideBar/SideBar";

function Dashboard() {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const sidebarRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <button onClick={onOpen} ref={sidebarRef}>
        Open
      </button>
      <SideBar isOpen={isOpen} onClose={onClose} sidebarRef={sidebarRef} />
      <Outlet />
      <GlobalNavigationBar />
    </>
  );
}

export default Dashboard;
