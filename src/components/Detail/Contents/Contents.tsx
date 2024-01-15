import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import styles from "./Contents.module.scss";

import Information from "./Information/Information";
import Reviews from "./Reviews/Reviews";

import { ContentsProps } from "@/types/detail";

function Contents({ onOpen }: ContentsProps) {
  return (
    <Tabs isFitted className={styles.container}>
      <TabList>
        <Tab
          fontSize="1.4rem"
          fontWeight="700"
          lineHeight="2.2rem"
          color="#CDCFD0"
          borderColor="#fff"
          _selected={{ color: "#1D2433", borderColor: "#2388FF" }}
        >
          상품정보
        </Tab>
        <Tab
          fontSize="1.4rem"
          fontWeight="700"
          lineHeight="2.2rem"
          color="#CDCFD0"
          borderColor="#fff"
          _selected={{ color: "#1D2433", borderColor: "#2388FF" }}
        >
          리뷰
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel padding="0">
          <Information onOpen={onOpen} />
        </TabPanel>
        <TabPanel padding="0">
          <Reviews onOpen={onOpen} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Contents;
