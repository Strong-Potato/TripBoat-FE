import { AiOutlineLeft } from "react-icons/ai";
import { GoKebabHorizontal } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import styles from "./Navigation.module.scss";

import { NavigationProps } from "@/types/detail";

function Navigation({ onOpen }: NavigationProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <AiOutlineLeft
        fontSize="2.4rem"
        onClick={() => navigate(-1)}
        cursor="pointer"
      />
      <GoKebabHorizontal fontSize="2.4rem" onClick={onOpen} cursor="pointer" />
    </div>
  );
}

export default Navigation;
