import { useState } from "react";

import styles from "./LocationFliterPage.module.scss";

import BackIcon from "@/assets/homeIcons/search/backInHome.svg?react";

import PopularList from "./PopularList/PopularList";
import SelectLocation from "./SelectLocation/SelectLocation";

interface PropsType {
  click: boolean;
  handleClick: () => void;
  setSearchLocation: React.Dispatch<React.SetStateAction<string>>;
}

interface AreaDataType {
  name: string;
  sigunguCode: number;
}

function LocationFliterPage({
  click,
  handleClick,
  setSearchLocation,
}: PropsType) {
  const [area, setArea] = useState("전국");
  const [areaData, setAreaData] = useState<AreaDataType[]>();
  const [sigungu, setSigungu] = useState("전체 지역");

  const vh = window.innerHeight / 100;

  function submit() {
    setSearchLocation(`${area} ${sigungu}`);
    handleClick();
  }

  return (
    <div
      className={styles.container}
      style={{ right: click ? "-100%" : 0, height: `${vh * 100}px` }}
    >
      <div className={styles.exitSection}>
        <button onClick={handleClick}>
          <BackIcon />
        </button>
      </div>
      <p className={styles.title}>지역을 선택해주세요</p>
      <div className={styles.popularSection}>
        <p>인기 지역</p>
      </div>
      <PopularList setArea={setArea} setSigungu={setSigungu} />
      <div style={{ marginTop: "24px" }}>
        <SelectLocation
          area={area}
          areaData={areaData}
          sigungu={sigungu}
          setArea={setArea}
          setAreaData={setAreaData}
          setSigungu={setSigungu}
        />
      </div>
      <div className={styles.submitBox}>
        <button className={styles.submitButton} onClick={submit}>
          선택 완료
        </button>
      </div>
    </div>
  );
}

export default LocationFliterPage;
