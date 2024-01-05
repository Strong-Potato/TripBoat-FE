import { useEffect, useState } from "react";

import styles from "./RecommendedItemList.module.scss";

import { getData } from "@/mocks/handlers/home";

import RecomendedItem from "./RecommendedItem/RecommendedItem";

import { RecommendedItemDataType } from "@/types/home";

interface PropsType {
  apiNum: number;
}

function RecommendedItemList(apiNum: PropsType) {
  const [data, setData] = useState<RecommendedItemDataType[]>();

  useEffect(() => {
    getData<RecommendedItemDataType[] | undefined>(
      `home/recommendedItem/${apiNum.apiNum}`,
      setData,
    );
  }, [apiNum]);

  return (
    <div className={styles.container}>
      {data &&
        data.map((data, i) => (
          <RecomendedItem data={data} key={data.title + i} />
        ))}
    </div>
  );
}

export default RecommendedItemList;
