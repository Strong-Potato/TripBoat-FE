import { useNavigate } from "react-router-dom";

import styles from "./SelectHeader.module.scss";

import BackIcon from "@/assets/back.svg?react";

import { SelectHeaderProps } from "@/types/selectHeader";

function SelectHeader({ title }: SelectHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className={styles.titleHeader}>
      <nav>
        <button onClick={() => navigate(-1)}>
          <BackIcon />
        </button>
      </nav>
      <h1>{title}</h1>
    </header>
  );
}

export default SelectHeader;
