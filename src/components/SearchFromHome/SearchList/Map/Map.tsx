import styles from "./Map.module.scss";

import MapItems from "./MapItems/MapItems";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType[];
  categoryChange: boolean;
}

function Map({ data, categoryChange }: PropsType) {
  return (
    <div className={styles.container}>
      <p className={styles.map}>Map</p>
      <MapItems data={data} categoryChange={categoryChange} />
    </div>
  );
}

export default Map;
