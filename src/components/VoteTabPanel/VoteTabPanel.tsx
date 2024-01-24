import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useState} from 'react';
import {useParams} from 'react-router-dom';

import styles from './VoteTabPanel.module.scss';

import {useGetVoteListInfo} from '@/hooks/Votes/vote';

import TabsVoteCard from './TabsVoteCard/TabsVoteCard';
import VoteTabPanelEmpty from './VoteTabPanelEmpty/VoteTabPanelEmpty';
import CreateVoteModal from '../Vote/CreateVoteModal/CreateVoteModal';
import CreateVoteModalButton from '../Vote/CreateVoteModal/CreateVoteModalButton';

import {VoteListInfo} from '@/types/vote';

const VoteTabPanel = () => {
  const {id: spaceId} = useParams();
  const data = useGetVoteListInfo(Number(spaceId));
  const voteListAllData = data.data;
  const voteListData: VoteListInfo[] | undefined = voteListAllData.voteResponse;
  // const viewResultVoteIdsData = voteListAllData.viewResultVoteIds;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const inProgressVotes = voteListData?.filter((vote) => vote.voteStatus === '진행 중');
  const completeVotes = voteListData?.filter((vote) => vote.voteStatus === '결정완료');

  const getVotesCount = (vote: VoteListInfo[] | undefined) => `총 ${vote ? vote.length : '0'}개`;

  // console.log('voteListData', data);
  console.log('voteListData', voteListData);
  console.log('voteListAllData', voteListAllData);

  return (
    <div className={styles.container}>
      <Tabs variant='voteFilter' onChange={(index) => setActiveTabIndex(index)}>
        <div className={styles.header}>
          <TabList>
            <Tab>전체</Tab>
            <Tab>진행 중</Tab>
            <Tab>결정 완료</Tab>
          </TabList>
          <p className={styles.header__counts}>
            {getVotesCount([voteListData, inProgressVotes, completeVotes][activeTabIndex])}
          </p>
        </div>
        <TabPanels className={styles.content}>
          <TabPanel className={styles.content__tabPanel}>
            {voteListData ? (
              voteListData.map((vote) => <TabsVoteCard data={vote} key={vote.voteId} />)
            ) : (
              <VoteTabPanelEmpty />
            )}
          </TabPanel>
          <TabPanel>
            {inProgressVotes ? (
              inProgressVotes?.map((vote) => <TabsVoteCard data={vote} key={vote.voteId} />)
            ) : (
              <VoteTabPanelEmpty />
            )}
          </TabPanel>
          <TabPanel>
            {completeVotes ? (
              completeVotes?.map((vote) => <TabsVoteCard data={vote} key={vote.voteId} />)
            ) : (
              <VoteTabPanelEmpty />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CreateVoteModalButton />
      <CreateVoteModal isEditMode={false} />
    </div>
  );
};

export default VoteTabPanel;
