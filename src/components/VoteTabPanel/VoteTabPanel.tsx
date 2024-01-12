import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import styles from "./VoteTabPanel.module.scss";

import { getVoteListData } from "@/mocks/handlers/vote";

import TabsVoteCard from "./TabsVoteCard/TabsVoteCard";
import VoteTabPanelEmpty from "./VoteTabPanelEmpty/VoteTabPanelEmpty";
import CreatVoteTitleModal from "../Vote/CreatVoteTitleModal/CreatVoteTitleModal";

import { VoteListData } from "@/types/vote";

const VoteTabPanel = () => {
  const [data, setData] = useState<VoteListData[]>([]);

  useEffect(() => {
    getVoteListData(setData);
  }, []);

  console.log("뭔데", data);

  return (
    <div className={styles.container}>
      <Tabs variant="voteFilter">
        <div className={styles.header}>
          <TabList>
            <Tab>전체</Tab>
            <Tab>진행 중</Tab>
            <Tab>결정 완료</Tab>
          </TabList>
          <p className={styles.header__counts}>총 {data.length}개</p>
        </div>
        <TabPanels className={styles.content}>
          <TabPanel className={styles.content__tabPanel}>
            {data &&
              data.map((item) => <TabsVoteCard data={item} key={item.id} />)}

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
