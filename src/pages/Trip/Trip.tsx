import styles from "./Trip.module.scss";
import { AiOutlineBell as AlarmIcon } from "react-icons/ai";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";
import { FiPlus as PlusIcon } from "react-icons/fi";
import {
  Avatar,
  AvatarGroup,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import EditBottomSlideContent from "@/components/TripSpace/EditBottomSlideContent/EditBottomSlideContent";
import SlideBar from "@/components/SideBar/SideBar";
import BottomSlide from "@/components/BottomSlide/BottomSlide";
import { useNavigate } from "react-router-dom";

function Trip() {
  const navigate = useNavigate();

  // 임시 데이터
  const users = [
    { name: "김철수", src: "" },
    { name: "나철수", src: "" },
    { name: "다철수", src: "https://bit.ly/kent-c-dodds" },
    { name: "라철수", src: "https://bit.ly/prosper-baba" },
    { name: "마철수", src: "https://bit.ly/code-beast" },
  ];

  const {
    isOpen: isBottomSlideOpen,
    onOpen: onBottomSlideOpen,
    onClose: onBottomSlideClose,
  } = useDisclosure();
  
  const {
    isOpen: isSlideBarOpen,
    onOpen: onSlideBarOpen,
    onClose: onSlideBarClose,
  } = useDisclosure();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.iconTab}>
          <button onClick={() => navigate('/alarm')}>
            <AlarmIcon size="24px" color="white" />
          </button>
          <button onClick={onSlideBarOpen}>
            <MenuIcon size="24px" color="white" />
          </button>
        </div>
        <div className={styles.titleContainer}>
          <div className={styles.titleContainer__dDayTitle}>D-day</div>
          <div className={styles.titleContainer__placeTitle}>
            여행지를 정해주세요
          </div>
          <div className={styles.dateContainer}>
            <span className={styles.dateContainer__dateTitle}>
              날짜를 정해주세요
            </span>
            <button
              className={styles.dateContainer__editButton}
              onClick={
                isBottomSlideOpen ? onBottomSlideClose : onBottomSlideOpen
              }
            >
              편집
            </button>
          </div>
        </div>
        <div className={styles.userContainer}>
          <div className={styles.avatarContainer}>
            <AvatarGroup
              className={styles.avatarContainer__group}
              spacing="-8px"
              max={3}
            >
              {users.map((user) => (
                <Avatar w="2.6rem" h="2.6rem" name={user.name} src={user.src} />
              ))}
            </AvatarGroup>
            <span>외 {users.length - 3}명</span>
          </div>
          <button className={styles.addPersonButton}>
            <PlusIcon />
            <span>일행추가</span>
          </button>
        </div>
      </header>
      <div className={styles.contents}>
        <Tabs isFitted variant="unstyled">
          <TabList className={styles.contents__tabList}>
            <Tab
              fontSize="tabLabel"
              padding="0"
              borderColor="transparent"
              _selected={{ color: "#1D2433", fontWeight: "700" }}
            >
              메인
            </Tab>
            <Tab
              fontSize="tabLabel"
              padding="0"
              _selected={{ color: "#1D2433", fontWeight: "700" }}
            >
              일정
            </Tab>
          </TabList>
          <TabIndicator className={styles.contents__tabIndicator} />
          <TabPanels>
            <TabPanel className={styles.contents__tabContent}>
              <>메인 탭 컴포넌트</>
            </TabPanel>
            <TabPanel className={styles.contents__tabContent}>
              <>일정 탭 컴포넌트</>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
      <SlideBar isSideOpen={isSlideBarOpen} sideClose={onSlideBarClose} />
      <BottomSlide
        isOpen={isBottomSlideOpen}
        onClose={onBottomSlideClose}
        children={<EditBottomSlideContent />}
      />
    </div>
  );
}

export default Trip;
