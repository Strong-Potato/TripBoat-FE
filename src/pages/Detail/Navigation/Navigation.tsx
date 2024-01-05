import { AiOutlineLeft } from "react-icons/ai";
import { GoKebabHorizontal } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import styles from "./Navigation.module.scss";

function Navigation() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <AiOutlineLeft fontSize="24px" onClick={() => navigate(-1)} />
      <GoKebabHorizontal fontSize="24px" />
    </div>
  );
}

export default Navigation;
