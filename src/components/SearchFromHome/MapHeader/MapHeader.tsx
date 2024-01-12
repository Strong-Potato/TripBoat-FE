import styles from "./MapHeadet.module.scss";

import BackIcon from "@/assets/homeIcons/search/backInHome.svg?react";

interface PropsType {
  keyword: string | undefined;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

function MapHeader({ keyword, set }: PropsType) {
  function offMap() {
    set(false);
  }

  return (
    <div className={styles.container}>
      <button onClick={offMap}>
        <BackIcon />
      </button>
      <span>{keyword}</span>
    </div>
  );
}

export default MapHeader;
