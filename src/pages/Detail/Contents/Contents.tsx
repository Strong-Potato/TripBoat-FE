import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";

import styles from "./Contents.module.scss";

import Information from "./Information/Information";
import Reviews from "./Reviews/Reviews";

function Contents() {
  return (
    <Tabs isFitted className={styles.container}>
      <TabList>
        <Tab
          fontSize="14px"
          fontWeight="700"
          lineHeight="22px"
          color="#CDCFD0"
          borderColor="#fff"
          _selected={{ color: "#1D2433", borderColor: "#2388FF" }}
        >
          상품정보
        </Tab>
        <Tab
          fontSize="14px"
          fontWeight="700"
          lineHeight="22px"
          color="#CDCFD0"
          borderColor="#fff"
          _selected={{ color: "#1D2433", borderColor: "#2388FF" }}
        >
          리뷰
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel padding="0">
          <Information />
        </TabPanel>
        <TabPanel padding="0">
          <Reviews />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Contents;
