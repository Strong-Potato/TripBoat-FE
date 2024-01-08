import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import styles from "./SearchBarAtHome.module.scss";

function SearchBarAtHome() {
  return (
    <div className={styles.container}>
      <Link to="/search" className={styles.search_bar}>
        <span>어디로 떠나시나요?</span>
        <p className={styles.search_icon}>
          <IoSearchSharp />
        </p>
      </Link>
    </div>
  );
}

export default SearchBarAtHome;
