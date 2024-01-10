import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import styles from "./VoteTabPanel.module.scss";

import TabsVoteCard from "./TabsVoteCard/TabsVoteCard";
import CreatVoteTitleModal from "../Vote/CreatVoteTitleModal/CreatVoteTitleModal";

const VoteTabPanel = () => {
  return (
    <div className={styles.container}>
      <Tabs variant="voteFilter">
        <div className={styles.container__header}>
          <TabList>
            <Tab>전체</Tab>
            <Tab>진행 중</Tab>
            <Tab>결정 완료</Tab>
          </TabList>
          <p className={styles.container__header__counts}>총 5개</p>
        </div>
        <TabPanels className={styles.container__content}>
          <TabPanel>
            <TabsVoteCard />
            <TabsVoteCard />
            <TabsVoteCard />
            <TabsVoteCard />
          </TabPanel>
          <TabPanel>
            <TabsVoteCard />
          </TabPanel>
          <TabPanel>
            <TabsVoteCard />
            <TabsVoteCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CreatVoteTitleModal />
    </div>
  );
};

export default VoteTabPanel;
