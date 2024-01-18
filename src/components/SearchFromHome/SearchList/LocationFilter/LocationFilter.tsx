import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import styles from "./LocationFilter.module.scss";

import LocationFliterPage from "./LocationFliterPage/LocationFliterPage";

interface PropsType {
  setSearchLocation: React.Dispatch<React.SetStateAction<string>>;
}

function LocationFilter({ setSearchLocation }: PropsType) {
  const [click, setClick] = useState(true);

  function handleClick() {
    setClick((prev) => !prev);
  }

  return (
    <>
      <div className={styles.container} onClick={handleClick}>
        <span style={{ userSelect: "none" }}>전체 지역</span>
        <MdOutlineKeyboardArrowDown className={styles.icon} />
      </div>
      <LocationFliterPage
        click={click}
        handleClick={handleClick}
        setSearchLocation={setSearchLocation}
      />
    </>
  );
}

export default LocationFilter;
