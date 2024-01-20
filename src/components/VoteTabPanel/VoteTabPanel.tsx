import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';

import styles from './VoteTabPanel.module.scss';

import {useGetVoteListInfo} from '@/hooks/Votes/vote';

import TabsVoteCard from './TabsVoteCard/TabsVoteCard';
import VoteTabPanelEmpty from './VoteTabPanelEmpty/VoteTabPanelEmpty';
import CreatVoteTitleModal from '../Vote/CreatVoteTitleModal/CreatVoteTitleModal';

const VoteTabPanel = () => {
  const {id: voteId} = useParams();
  const {data: voteInfo} = useGetVoteListInfo(Number(voteId));

  return (
    <div className={styles.container}>
      <Tabs variant='voteFilter'>
        <div className={styles.header}>
          <TabList>
            <Tab>전체</Tab>
            <Tab>진행 중</Tab>
            <Tab>결정 완료</Tab>
          </TabList>
          <p className={styles.header__counts}>총 {voteInfo.length}개</p>
        </div>
        <TabPanels className={styles.content}>
          <TabPanel className={styles.content__tabPanel}>
            {voteInfo.map((item) => (
              <TabsVoteCard data={item} key={item.voteId} />
            ))}

            {/* // : (
            //   <VoteTabPanelEmpty />
            // )} */}
          </TabPanel>
          <TabPanel>
            <VoteTabPanelEmpty />
          </TabPanel>
          <TabPanel>
            <VoteTabPanelEmpty />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CreatVoteTitleModal />
    </div>
  );
};

export default VoteTabPanel;
