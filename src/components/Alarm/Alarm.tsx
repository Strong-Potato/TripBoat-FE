import { Slide } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import styles from "./Alarm.module.scss";

import useLockBodyScroll from "@/hooks/useLockBodyScroll";

import Back from "@/components/Alarm/Back/Back";
import TabCapsule from "@/components/Alarm/TabCapsule/TabCapsule";

import { AlarmProps } from "@/types/alarm";

function Alarm({ isAlarmOpen, alarmClose }: AlarmProps) {
  // 알림 스타일링
  const [isVisible, setIsVisible] = useState(isAlarmOpen);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    let timer: NodeJS.Timeout | number;
    if (isAlarmOpen) {
      setIsVisible(true);
    } else {
      timer = setTimeout(() => {
        setIsVisible(false);
      }, 400);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isAlarmOpen]);
  const containerStyle = {
    display: isVisible ? "block" : "none",
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useLockBodyScroll(isAlarmOpen);

  return (
    <div style={containerStyle} className={styles.page}>
      <Slide
        in={isAlarmOpen}
        direction="right"
        className={styles.slide}
        style={{
          width: windowWidth <= 450 ? "100%" : "45rem",
          position: "absolute",
          zIndex: 10,
        }}
        transition={{
          exit: { duration: 0.5 },
          enter: { duration: 0.5 },
        }}
      >
        <Back alarmClose={alarmClose} />
        <TabCapsule />
      </Slide>
    </div>
  );
}

export default Alarm;
