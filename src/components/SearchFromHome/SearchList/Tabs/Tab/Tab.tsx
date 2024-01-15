import styles from "./Tab.module.scss";

interface PropsType {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  thisCategory: string;
}

function Tab({
  setCategory,
  setCategoryChange,
  category,
  thisCategory,
}: PropsType) {
  function handleCategory(key: string) {
    setCategoryChange(true);
    setTimeout(() => {
      setCategoryChange(false);
    }, 150);
    setCategory(key);
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
