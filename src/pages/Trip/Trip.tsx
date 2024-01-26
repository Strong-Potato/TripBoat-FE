import {
  Avatar,
  AvatarGroup,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react';
import {useEffect, useRef, useState} from 'react';
import {AiOutlineBell as AlarmIcon} from 'react-icons/ai';
import {AiOutlineMenu as MenuIcon} from 'react-icons/ai';
import {FiPlus as PlusIcon} from 'react-icons/fi';
import {useNavigate, useParams} from 'react-router-dom';

import styles from './Trip.module.scss';

import {useGetJourneys, useGetSpace} from '@/hooks/Spaces/space';

import Alarm from '@/components/Alarm/Alarm';
import BottomSlide from '@/components/BottomSlide/BottomSlide';
import RouteTabPanel from '@/components/Route/RouteTabPanel/RouteTabPanel';
import SlideBar from '@/components/SideBar/SideBar';
import EditTripSpace from '@/components/TripSpace/EditTripSpace/EditTripSpace';
import FriendList from '@/components/TripSpace/FriendList/FriendList';
import InviteFriends from '@/components/TripSpace/InviteFriends/InviteFriends';
import VoteTabPanel from '@/components/VoteTabPanel/VoteTabPanel';

import {checkDDay} from '@/utils/checkDday';
import {setSpaceDate} from '@/utils/formatDate';
import {getMapCenter} from '@/utils/getMapCenter';

import {LatLng} from '@/types/route';
import {Member} from '@/types/sidebar';

function Trip() {
  const news = localStorage.getItem('news');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const {isOpen: isBottomSlideOpen, onOpen: onBottomSlideOpen, onClose: onBottomSlideClose} = useDisclosure();
  const {isOpen: isSlideBarOpen, onOpen: onSlideBarOpen, onClose: onSlideBarClose} = useDisclosure();
  const {isOpen: isInviteOpen, onOpen: onInviteOpen, onClose: onInviteClose} = useDisclosure();
  const {isOpen: isFriendListOpen, onOpen: onFriendListOpen, onClose: onFriendListClose} = useDisclosure();
  const {isOpen: isAlarmOpen, onOpen: onAlarmOpen, onClose: onAlarmClose} = useDisclosure();
  const {id} = useParams();
  const {data: spaceData} = useGetSpace(Number(id));
  const {data: journeysData} = useGetJourneys(Number(id));
  const mapRef = useRef<kakao.maps.Map>(null);
  const [center, setCenter] = useState<LatLng>(getMapCenter(journeysData.data));
  const navigate = useNavigate();
  const users = spaceData?.data?.members;

  useEffect(() => {
    console.log('아임센터', center);
  }, [center]);

  if (!spaceData.data) {
    console.log('로그인 안 했음');
    navigate('/trip');
  }

  if (spaceData.data) {
    console.log(spaceData.data);
    console.log(journeysData.data);
  }

  useEffect(() => {
    const map = mapRef.current;

    if (map) {
      map.relayout();
      setCenter(getMapCenter(journeysData.data));
    }
  }, [selectedTabIndex, journeysData]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconTab}>
          <button onClick={onAlarmOpen} className={styles.iconTab__wrapper}>
            <AlarmIcon size='24px' color='white' />
            {news && <div className={styles.iconTab__wrapper__eclips} />}
          </button>
          <button onClick={onSlideBarOpen}>
            <MenuIcon size='24px' color='white' />
          </button>
        </div>

        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.titleContainer__dDayTitle}>{checkDDay(spaceData?.data?.dueDate)}</div>
            <div className={styles.titleContainer__placeTitle}>
              {spaceData?.data?.city ? spaceData.data.city : '여행지를 정해주세요'}
            </div>
            <div className={styles.dateContainer}>
              <span className={styles.dateContainer__dateTitle}>
                {spaceData?.data?.endDate
                  ? setSpaceDate(
                      spaceData.data.startDate,
                      spaceData.data.startDate === spaceData.data.endDate ? '' : spaceData.data.endDate,
                    )
                  : '날짜를 정해주세요'}
              </span>
              <button className={styles.dateContainer__editButton} onClick={onBottomSlideOpen}>
                편집
              </button>
            </div>
          </div>
          <div className={styles.userContainer}>
            <button className={styles.avatarContainer} onClick={onFriendListOpen}>
              <AvatarGroup className={styles.avatarContainer__group} spacing='-8px' max={3} variant='spaceAvatar'>
                {users?.map((user: Member) => (
                  <Avatar
                    w='2.6rem'
                    h='2.6rem'
                    key={user.id}
                    name={user.nickname}
                    src={user.profile}
                    referrerPolicy={'no-referrer'}
                  />
                ))}
              </AvatarGroup>
              {users?.length > 3 && <span>외 {users?.length - 3}명</span>}
            </button>
            <button className={styles.addPersonButton} onClick={onInviteOpen}>
              <PlusIcon />
              <span>일행추가</span>
            </button>
          </div>
        </header>

        <div className={styles.contents}>
          <Tabs isFitted variant='voteTab' index={selectedTabIndex} onChange={(index) => setSelectedTabIndex(index)}>
            <div className={styles.contents__stickyTabList}>
              <TabList className={styles.contents__tabList}>
                <Tab
                  fontSize='tabLabel'
                  padding='0'
                  borderColor='transparent'
                  _selected={{color: '#1D2433', fontWeight: '700'}}
                >
                  투표
                </Tab>
                <Tab fontSize='tabLabel' padding='0' _selected={{color: '#1D2433', fontWeight: '700'}}>
                  일정
                </Tab>
              </TabList>
              <TabIndicator className={styles.contents__tabIndicator} />
            </div>
            <TabPanels bg='#fff'>
              <TabPanel className={styles.contents__tabContent}>
                <VoteTabPanel />
              </TabPanel>
              <TabPanel className={styles.contents__tabContent}>
                <RouteTabPanel mapRef={mapRef} center={center} journeysData={journeysData.data} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <BottomSlide isOpen={isBottomSlideOpen} onClose={onBottomSlideClose} children={<EditTripSpace />} />
        <BottomSlide isOpen={isInviteOpen} onClose={onInviteClose} children={<InviteFriends isOpen={isInviteOpen} />} />
        <BottomSlide isOpen={isFriendListOpen} onClose={onFriendListClose} children={<FriendList members={users} />} />
      </div>
      <SlideBar isSideOpen={isSlideBarOpen} sideClose={onSlideBarClose} />
      <Alarm isAlarmOpen={isAlarmOpen} alarmClose={onAlarmClose} />
    </>
  );
}

export default Trip;
