import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

import styles from './TabCapsule.module.scss';

import {useGetAlarm} from '@/hooks/Notification/useNotification';

import {PostReadAlarm} from '@/api/notification';
import {parsingAlarmTravel} from '@/utils/parsingAlarm';

import Content from './Content/Content';

function TabCapsule({isAlarmOpen}: {isAlarmOpen: boolean}) {
  const navigate = useNavigate();
  const {data: Alarm} = useGetAlarm(isAlarmOpen);
  localStorage.removeItem('news');

  Alarm && PostReadAlarm(Alarm?.data.data.notificationDetail[0].id);
  if (Alarm?.status === 403 || Alarm?.status === 401) {
    navigate('/auth/login', {
      replace: true,
    });
  }

  const AllContents = parsingAlarmTravel(Alarm?.data.data.notificationDetail);
  const SpaceTravelContents = parsingAlarmTravel(Alarm?.data.data.notificationDetail);

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
          <Content contents={AllContents} />
        </TabPanel>
        <TabPanel p={0}>
          <Content contents={SpaceTravelContents} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabCapsule;
