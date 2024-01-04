import styles from "./TabBar.module.scss";
import { IoSearchSharp } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
import { Link } from "react-router-dom";

function TabBar() {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Link to="/search">
          <IoSearchSharp />
        </Link>
        <AiOutlineBell />
      </div>
    </div>
  );
}

export default TabBar;
