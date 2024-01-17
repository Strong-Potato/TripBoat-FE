import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./Tab.module.scss";

interface PropsType {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  thisCategory: string;
  keyword: string | undefined;
}

function Tab({
  setCategory,
  setCategoryChange,
  category,
  thisCategory,
  keyword,
}: PropsType) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  function handleCategory(key: string) {
    setCategoryChange(true);
    setTimeout(() => {
      setCategoryChange(false);
    }, 150);
    setCategory(key);
    if (searchParams.get("map")) {
      navigate(`/home/search?keyword=${keyword}&category=${key}&map=true`);
    } else {
      navigate(`/home/search?keyword=${keyword}&category=${key}`);
    }
  }

  return (
    <p
      className={styles.container}
      id={thisCategory}
      style={{
        color: category === thisCategory ? "#1d2433" : "#cdcfd0",
        borderBottom: category === thisCategory ? "2px solid #1d2433" : "none",
      }}
      onClick={() => {
        handleCategory(thisCategory);
      }}
    >
      <span>{thisCategory}</span>
    </p>
  );
}

export default Tab;
