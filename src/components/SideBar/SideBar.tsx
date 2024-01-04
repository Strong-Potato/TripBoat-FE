import {
  Avatar,
  CloseButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import styles from "./SideBar.module.scss";

import TravelList from "./TravelList/TravelList";

import { SideBarProps } from "@/types/sidebar";

const travelList = [
  { name: "여행 리스트 1 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 2 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 3 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 4 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 5 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 6 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 7 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 8 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 9 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 10 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 11 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 12 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 13 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 14 (여행지 미정)", date: "날짜 미정" },
  { name: "여행 리스트 15 (여행지 미정)", date: "날짜 미정" },
];

function SideBar({ onClose, isOpen, sidebarRef }: SideBarProps) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      onEsc={onClose}
      size={"sm"}
      finalFocusRef={sidebarRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader display="flex" justifyContent="flex-end">
          <CloseButton onClick={onClose} size="lg" />
        </DrawerHeader>
        <DrawerBody padding={0}>
          <div className={styles.container}>
            <section className={styles.container__profile}>
              <div>
                <Avatar
                  size="lg"
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
              </div>
              <div>
                <p className={styles.container__profile__nickName}>닉네임</p>
                <Link
                  to="/user"
                  onClick={onClose}
                  className={styles.container__profile__editProfile}
                >
                  {"프로필 보기 >"}
                </Link>
              </div>
            </section>
            <Divider />
            <TravelList travelList={travelList} />
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default SideBar;
