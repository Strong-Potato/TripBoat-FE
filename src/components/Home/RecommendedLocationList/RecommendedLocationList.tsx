import { useEffect, useState } from "react";

import styles from "./RecommendedLocationList.module.scss";

import { getData } from "@/mocks/handlers/home";

import RecommendedLocation from "./RecommendedLocation/RecommendedLocation";

import { LocationDataType } from "@/types/home";

function RecommendedLocationList() {
  const [data, setData] = useState<LocationDataType[]>();

  useEffect(() => {
    getData<LocationDataType[] | undefined>(
      `home/recommendedLocation`,
      setData,
    );
  }, []);

  return (
    <div className={styles.container}>
      {data &&
        data.map((data, i) => (
          <RecommendedLocation data={data} key={data.location + i} />
        ))}
    </div>
  );
}

export default RecommendedLocationList;
