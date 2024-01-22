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
        <AiOutlineHome
          fontSize="24px"
          color={!pathname ? "#0086ff" : "rgba(35, 39, 47, 1)"}
        />
      </Link>
      <Link to="/trip/1">
        <AiOutlineCarryOut
          fontSize="24px"
          color={pathname === "trip" ? "#0086ff" : "rgba(35, 39, 47, 1)"}
        />
      </Link>
      <Link to="/heart">
        <FaRegHeart
          fontSize="24px"
          color={pathname === "heart" ? "#0086ff" : "rgba(35, 39, 47, 1)"}
        />
      </Link>
      <Link to="/user">
        <LuUser2
          fontSize="24px"
          color={pathname === "user" ? "#0086ff" : "rgba(35, 39, 47, 1)"}
        />
      </Link>
    </div>
  );
}

export default GlobalNavigationBar;
