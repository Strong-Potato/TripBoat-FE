import {Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

// import {useNavigate} from 'react-router-dom';
import styles from './TabCapsule.module.scss';

import {useGetAlarm} from '@/hooks/Notification/useNotification';

import Content from './Content/Content';

const AllContents = [
  {
    url: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
    title: `[강릉 여행]강자밭님이 "밥집 어디갈꺼야" 투표를 만들었어요.`,
    time: '2024-01-11T23:09:00',
  },
  {
    url: 'https://github.com/Strong-Potato/TripVote-FE/assets/120024673/089a8673-405e-4a06-b173-4cf3e985b466',
    title: '개인정보 보호정책이 변경되었습니다.',
    time: '2024-01-11T20:00:00',
  },
  {
    url: 'https://github.com/Strong-Potato/TripVote-FE/assets/120024673/089a8673-405e-4a06-b173-4cf3e985b466',
    title: '개인정보 보호정책이 변경되었습니다.',
    time: '2024-01-10T10:00:00',
  },
  {
    url: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
    title: `[강릉 여행]강자밭님이 "카페 어디갈꺼야" 투표를 만들었어요.`,
    time: '2024-01-03T12:00:00',
  },
  {
    url: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
    title: `[강릉 여행]강자밭님이 "숙소 어디갈꺼야" 투표를 만들었어요.`,
    time: '2023-12-31T12:00:00',
  },
];

const SpaceTravelContents = [
  {
    url: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
    title: `[강릉 여행]강자밭님이 "밥집 어디갈꺼야" 투표를 만들었어요.`,
    time: '2024-01-11T23:05:00',
  },
  {
    url: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
    title: `[강릉 여행]강자밭님이 "카페 어디갈꺼야" 투표를 만들었어요.`,
    time: '2024-01-03T12:00:00',
  },
  {
    url: 'https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg',
    title: `[강릉 여행]강자밭님이 "숙소 어디갈꺼야" 투표를 만들었어요.`,
    time: '2023-12-31T12:00:00',
  },
];

function TabCapsule({isAlarmOpen}: {isAlarmOpen: boolean}) {
  const {data: Alarm} = useGetAlarm(isAlarmOpen);
  console.log(Alarm);
  const navigate = useNavigate();

  if (Alarm?.status === 403 || Alarm?.status === 401) {
    navigate('/auth/login', {
      replace: true,
    });
  }

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
