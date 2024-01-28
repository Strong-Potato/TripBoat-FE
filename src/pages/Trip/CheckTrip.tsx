import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useEffect} from 'react';
import {AiOutlineBell as AlarmIcon} from 'react-icons/ai';
import {AiOutlineMenu as MenuIcon} from 'react-icons/ai';
import {FiPlus as PlusIcon} from 'react-icons/fi';
import {useNavigate} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import styles from './Trip.module.scss';

import {useGetRecentSpace} from '@/hooks/Spaces/space';
import {usePostSpace} from '@/hooks/Spaces/useSpaces';
import useGoLogin from '@/hooks/useGoLogin';

import AlertModal from '@/components/AlertModal/AlertModal';

import {activeTabIndexState} from '@/recoil/spaces/trip';
import {isModalOpenState} from '@/recoil/vote/alertModal';

function CheckTrip() {
  const {data: recentSpaceData} = useGetRecentSpace();
  const goLogin = useGoLogin();
  const setIsModal = useSetRecoilState(isModalOpenState);
  const {mutate} = usePostSpace();
  const navigate = useNavigate();
  const setSelectedTabIndex = useSetRecoilState(activeTabIndexState);

  useEffect(() => {
    if (recentSpaceData?.status === 403 || recentSpaceData?.status === 401) {
      // 비로그인 유저
      goLogin();
    } else if (recentSpaceData?.responseCode === 404) {
      // 유효한 여행 스페이스 없는 유저
      setIsModal(true);
    } else if (recentSpaceData?.data?.id) {
      // 최근 방문 스페이스 있는 유저
      navigate(`/trip/${recentSpaceData?.data?.id}`, {state: {id: recentSpaceData?.data?.id}});
      setSelectedTabIndex(0);
    }
  }, [recentSpaceData]);

  const makeNewSpace = () => {
    setIsModal(false);
    mutate(undefined, {
      onSuccess: (data) => {
        if (data) {
          navigate(`/trip/${data.data.id}`, {state: {id: recentSpaceData.data.id}});
        }
      },
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.iconTab}>
          <button className={styles.iconTab__wrapper}>
            <AlarmIcon size='24px' color='white' />
          </button>
          <button>
            <MenuIcon size='24px' color='white' />
          </button>
        </div>

        <header className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.titleContainer__dDayTitle}>D-day</div>
            <div className={styles.titleContainer__placeTitle}>여행지를 정해주세요</div>
            <div className={styles.dateContainer}>
              <span className={styles.dateContainer__dateTitle}>날짜를 정해주세요</span>
              <button className={styles.dateContainer__editButton}>편집</button>
            </div>
          </div>
          <div className={styles.userContainer}>
            <button className={styles.avatarContainer} />
            <button className={styles.addPersonButton}>
              <PlusIcon />
              <span>일행추가</span>
            </button>
          </div>
        </header>

        <div className={styles.contents}>
          <Tabs isFitted variant='voteTab'>
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
                <Tab
                  fontSize='tabLabel'
                  padding='0'
                  borderColor='transparent'
                  _selected={{color: '#1D2433', fontWeight: '700'}}
                >
                  일정
                </Tab>
              </TabList>
              <TabIndicator className={styles.contents__tabIndicator} />
            </div>
            <TabPanels bg='#fff'>
              <TabPanel className={styles.contents__tabContent}>
                <></>
              </TabPanel>
              <TabPanel className={styles.contents__tabContent}>
                <></>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
      <AlertModal
        title={'새 여행 스페이스를 만드시겠습니까?'}
        subText={'현재 여행 스페이스가 없습니다.\n새 스페이스로 다음 여행을 준비해보세요.'}
        actionButton={'만들기'}
        isSmallSize={true}
        onClickAction={makeNewSpace}
      />
    </>
  );
}

export default CheckTrip;
