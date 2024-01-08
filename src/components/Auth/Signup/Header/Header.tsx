import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import styles from "./Header.module.scss";

interface Props {
  content?: string;
}

function Header({ content }: Props) {
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <AiOutlineLeft
        fontSize="2.4rem"
        onClick={() => navigate(-1)}
        cursor="pointer"
      />
      <div>{content}</div>
    </header>
  );
}

export default Header;
