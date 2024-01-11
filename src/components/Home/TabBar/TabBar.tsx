import { AiOutlineBell } from "react-icons/ai";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import styles from "./TabBar.module.scss";

function TabBar() {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Link to="/home/search">
          <IoSearchSharp />
        </Link>
        <Link to="/alarm">
          <AiOutlineBell />
        </Link>
      </div>
    </div>
  );
}

export default TabBar;
