import {Tab, TabList, TabPanel, TabPanels, Tabs} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useSetRecoilState} from 'recoil';

import styles from './VoteTabPanel.module.scss';

import {useGetVoteListInfo} from '@/hooks/Votes/vote';

import {showResultIdsState} from '@/recoil/vote/showResults';

import TabsVoteCard from './TabsVoteCard/TabsVoteCard';
import VoteTabPanelEmpty from './VoteTabPanelEmpty/VoteTabPanelEmpty';
import CreateVoteModal from '../Vote/CreateVoteModal/CreateVoteModal';
import CreateVoteModalButton from '../Vote/CreateVoteModal/CreateVoteModalButton';

import {VoteListInfo} from '@/types/vote';

const VoteTabPanel = () => {
  const {id: spaceId} = useParams();
  const {data: voteListAllData} = useGetVoteListInfo(Number(spaceId));
  const voteListData: VoteListInfo[] | undefined = voteListAllData?.data.voteResponse;
  const viewResultVoteIdsData: number[] | undefined = voteListAllData?.data.viewResultVoteIds.voteIds;
  const setShowResultIds = useSetRecoilState(showResultIdsState);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const inProgressVotes = voteListData?.filter((vote) => vote.voteStatus === '진행 중');
  const completeVotes = voteListData?.filter((vote) => vote.voteStatus === '결정완료');

  const getVotesCount = (vote: VoteListInfo[] | undefined) => `총 ${vote ? vote.length : '0'}개`;
  const tabPanelData = [voteListData, inProgressVotes, completeVotes];

  useEffect(() => {
    if (viewResultVoteIdsData) {
      setShowResultIds(viewResultVoteIdsData);
    }
  }, [viewResultVoteIdsData]);

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
          {tabPanelData.map((votes, index) => (
            <TabPanel key={index} className={styles.content__tabPanel}>
              {votes ? votes.map((vote) => <TabsVoteCard data={vote} key={vote.voteId} />) : <VoteTabPanelEmpty />}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <CreateVoteModalButton />
      <CreateVoteModal isEditMode={false} />
    </div>
  );
};

export default VoteTabPanel;
