import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './TabCapsule.module.scss';

import {useGetAlarm} from '@/hooks/Notification/useNotification';

import {PostReadAlarm} from '@/api/notification';
import {parsingAlarmTravel} from '@/utils/parsingAlarm';

import Content from './Content/Content';

import {NotificationData} from '@/types/notification';

function TabCapsule({isAlarmOpen}: {isAlarmOpen: boolean}) {
  const [allContents, setAllContents] = useState<NotificationData[]>([]);
  const [spaceTravelContents, setSpaceTravelContents] = useState<NotificationData[]>([]);
  const navigate = useNavigate();
  const {data: AlarmData} = useGetAlarm(isAlarmOpen);

  if (AlarmData?.status === 403 || AlarmData?.status === 401) {
    navigate('/auth/login', {
      replace: true,
    });
  }

  useEffect(() => {
    setAllContents(parsingAlarmTravel(AlarmData?.data.data.notificationDetail));
    setSpaceTravelContents(parsingAlarmTravel(AlarmData?.data.data.notificationDetail));
  }, [AlarmData]);

  useEffect(() => {
    if (AlarmData?.data.data.notificationDetail[0]) {
      localStorage.removeItem('news');
      PostReadAlarm(AlarmData?.data.data.notificationDetail[0].id);
    }
  }, [AlarmData?.data.data.notificationDetail]);

  return (
    <Tabs isFitted variant='unstyled'>
      <TabList>
        <Tab className={styles.title} fontSize={'button'} fontWeight={'button'} lineHeight={'button'}>
          전체
        </Tab>
        <Tab className={styles.title} fontSize={'button'} fontWeight={'button'} lineHeight={'button'}>
          여행스페이스
        </Tab>
      </TabList>
      <TabIndicator mt='-1.5px' height='2px' bg='#2388FF' borderRadius='2px' width='50% !important' />
      <TabPanels>
        <TabPanel p={0}>
          <Content contents={allContents} />
        </TabPanel>
        <TabPanel p={0}>
          <Content contents={spaceTravelContents} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabCapsule;
