import styles from "./Map.module.scss";

import MapItems from "./MapItems/MapItems";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType[];
}

function Map({ data }: PropsType) {
  return (
    <div className={styles.container}>
      <p>Map</p>
      <MapItems data={data} />
    </div>
  );
}

export default Map;
