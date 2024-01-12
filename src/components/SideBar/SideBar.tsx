import { Avatar, Divider, Slide } from "@chakra-ui/react";
import { useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

import styles from "./SideBar.module.scss";

import useOnClickOutside from "@/hooks/useOnClickOutside";

import TravelList from "./TravelList/TravelList";

import { SideBarProps } from "@/types/sidebar";

function SideBar({ isSideOpen, sideClose, user }: SideBarProps) {
  const containerStyle = {
    display: isSideOpen ? "block" : "none",
  };

  const slideRef = useRef(null);
  useOnClickOutside(slideRef, sideClose);

  return (
    <div style={containerStyle} className={styles.page}>
      <Slide
        in={isSideOpen}
        direction="right"
        ref={slideRef}
        className={styles.slide}
        style={{ width: "28rem", position: "absolute" }}
      >
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <button onClick={sideClose}>
              <IoMdClose className={styles.wrapper__button} />
            </button>
          </div>
          <section className={styles.profile}>
            <div>
              <Avatar
                w={"6.4rem"}
                h={"6.4rem"}
                name={user.name}
                src={user.src}
              />
            </div>
            <div>
              <p className={styles.profile__nickName}>{user.name}</p>
              <Link
                to="/user"
                onClick={sideClose}
                className={styles.profile__editProfile}
              >
                {"프로필 보기 >"}
              </Link>
            </div>
          </section>
          <Divider />
          <TravelList travelList={user.travelList} />
        </div>
      </Slide>
    </div>
  );
}

export default SideBar;
