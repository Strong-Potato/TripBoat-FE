import { AiOutlineCarryOut, AiOutlineHome } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

import styles from "./GlobalNavigationBar.module.scss";

function GlobalNavigationBar() {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <div className={styles.container}>
      <Link to="/" className={styles.box}>
        <AiOutlineHome fontSize="24px" color={!pathname && "#0086ff"} />
      </Link>
      <Link to="/carryout" className={styles.box}>
        <AiOutlineCarryOut
          fontSize="24px"
          color={pathname == "carryout" && "#0086ff"}
        />
      </Link>
      <Link to="/heart" className={styles.box}>
        <FaRegHeart fontSize="24px" color={pathname == "heart" && "#0086ff"} />
      </Link>
      <Link to="/user" className={styles.box}>
        <LuUser2 fontSize="24px" color={pathname == "user" && "#0086ff"} />
      </Link>
    </div>
  );
}

export default GlobalNavigationBar;
