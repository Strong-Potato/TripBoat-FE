import { useNavigate } from "react-router-dom";

import styles from "./MapHeader.module.scss";

import BackIcon from "@/assets/homeIcons/search/backInHome.svg?react";

interface PropsType {
  keyword: string | undefined;
  category: string;
  set: React.Dispatch<React.SetStateAction<string>>;
}

function MapHeader({ keyword, set, category }: PropsType) {
  const navigate = useNavigate();

  function offMap() {
    set("false");
    navigate(`/home/search?keyword=${keyword}&category=${category}`);
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
