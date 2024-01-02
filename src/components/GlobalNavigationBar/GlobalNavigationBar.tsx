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
      <Link to="/">
        <AiOutlineHome fontSize="24px" color={!pathname && "#0086ff"} />
      </Link>
      <Link to="/carryout">
        <AiOutlineCarryOut
          fontSize="24px"
          color={pathname === "carryout" && "#0086ff"}
        />
      </Link>
      <Link to="/heart">
        <FaRegHeart fontSize="24px" color={pathname === "heart" && "#0086ff"} />
      </Link>
      <Link to="/user">
        <LuUser2 fontSize="24px" color={pathname === "user" && "#0086ff"} />
      </Link>
    </div>
  );
}

export default GlobalNavigationBar;
