import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import styles from "./TabCapsule.module.scss";

import Content from "./Content/Content";

const AllContents = [
  {
    url: "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    title: `[강릉 여행]강자밭님이 "밥집 어디갈꺼야" 투표를 만들었어요.`,
    time: "2024-01-11T23:09:00",
  },
  {
    url: "https://private-user-images.githubusercontent.com/120024673/294744934-6e80734e-61fc-46e5-abb4-3d26bad5f1ea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTQzNDYsIm5iZiI6MTcwNDYxNDA0NiwicGF0aCI6Ii8xMjAwMjQ2NzMvMjk0NzQ0OTM0LTZlODA3MzRlLTYxZmMtNDZlNS1hYmI0LTNkMjZiYWQ1ZjFlYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwN1QwNzU0MDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMGRlZGI3ZjRiZTRkZDY4YTJjNTQxMWNkNmI5YWI5ZDExNzU3OWEwNjJhNTA1NTgzNDQxYWY3MDMyYmVkYmIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QMy2zh7OIc5uzN7W7qhAr540FtZN7YbaZ4k0z9Ajmws",
    title: "개인정보 보호정책이 변경되었습니다.",
    time: "2024-01-11T20:00:00",
  },
  {
    url: "https://private-user-images.githubusercontent.com/120024673/294744934-6e80734e-61fc-46e5-abb4-3d26bad5f1ea.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDQ2MTQzNDYsIm5iZiI6MTcwNDYxNDA0NiwicGF0aCI6Ii8xMjAwMjQ2NzMvMjk0NzQ0OTM0LTZlODA3MzRlLTYxZmMtNDZlNS1hYmI0LTNkMjZiYWQ1ZjFlYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMTA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDEwN1QwNzU0MDZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yMGRlZGI3ZjRiZTRkZDY4YTJjNTQxMWNkNmI5YWI5ZDExNzU3OWEwNjJhNTA1NTgzNDQxYWY3MDMyYmVkYmIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.QMy2zh7OIc5uzN7W7qhAr540FtZN7YbaZ4k0z9Ajmws",
    title: "개인정보 보호정책이 변경되었습니다.",
    time: "2024-01-10T10:00:00",
  },
  {
    url: "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    title: `[강릉 여행]강자밭님이 "카페 어디갈꺼야" 투표를 만들었어요.`,
    time: "2024-01-03T12:00:00",
  },
  {
    url: "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    title: `[강릉 여행]강자밭님이 "숙소 어디갈꺼야" 투표를 만들었어요.`,
    time: "2023-12-31T12:00:00",
  },
];

const SpaceTravelContents = [
  {
    url: "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    title: `[강릉 여행]강자밭님이 "밥집 어디갈꺼야" 투표를 만들었어요.`,
    time: "2024-01-11T23:05:00",
  },
  {
    url: "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    title: `[강릉 여행]강자밭님이 "카페 어디갈꺼야" 투표를 만들었어요.`,
    time: "2024-01-03T12:00:00",
  },
  {
    url: "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
    title: `[강릉 여행]강자밭님이 "숙소 어디갈꺼야" 투표를 만들었어요.`,
    time: "2023-12-31T12:00:00",
  },
];

function TabCapsule() {
  return (
    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab
          className={styles.title}
          fontSize={"button"}
          fontWeight={"button"}
          lineHeight={"button"}
        >
          전체
        </Tab>
        <Tab
          className={styles.title}
          fontSize={"button"}
          fontWeight={"button"}
          lineHeight={"button"}
        >
          여행스페이스
        </Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="#2388FF" />
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
