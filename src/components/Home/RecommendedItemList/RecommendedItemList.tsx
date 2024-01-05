import { useEffect, useState } from "react";
import RecomendedItem from "./RecommendedItem/RecommendedItem";
import styles from "./RecommendedItemList.module.scss";
import axios from "axios";

interface PropsType {
  apiNum: number;
}

interface DataType {
  title: string;
  location: string;
  score: string;
  reviewNumber: string;
}

function RecommendedItemList(apiNum: PropsType) {
  const [data, setData] = useState<DataType[]>();

  async function getData() {
    try {
      const fetchData = await axios.get(
        `/api/home/recommendedItem/${apiNum.apiNum}`,
      );
      setData(fetchData.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
