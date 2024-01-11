import styles from "./Tab.module.scss";

interface PropsType {
  set: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  thisCategory: string;
}

function Tab({ set, category, thisCategory }: PropsType) {
  function handleCategory(key: string) {
    set(key);
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
