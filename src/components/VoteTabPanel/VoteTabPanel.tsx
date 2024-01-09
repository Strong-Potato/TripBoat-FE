import TabsVoteCard from "./TabsVoteCard/TabsVoteCard";
import styles from "./VoteTabPanel.module.scss";
import {
  Tab,
  TabList,
  TabPanels,
  Tabs,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

const VoteTabPanel = () => {
  return (
    <div className={styles.container}>
      <Tabs variant="voteFilter2">
        <TabList>
          <Tab>전체</Tab>
          <Tab>진행 중</Tab>
          <Tab>결정 완료</Tab>
        </TabList>
        <p className={styles.container__counts}>총 5개</p>
        <TabPanels>
          <TabPanel>
            <TabsVoteCard />
          </TabPanel>
          <TabPanel>
            <p>2!</p>
          </TabPanel>
          <TabPanel>
            <p>3!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default VoteTabPanel;
