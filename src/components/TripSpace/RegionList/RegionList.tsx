// RegionList.jsx

import styles from "./RegionList.module.scss";

interface RegionListProps {
  name: string;
  imageUrl: string;
  isSelected: boolean;
  onSelect: (regionName: string) => void;
}

function RegionList({ name, imageUrl, isSelected, onSelect }: RegionListProps) {
  return (
    <div className={styles.container}>
      <div className={styles.regionInformation}>
        <img src={imageUrl} alt={name} />
        <span>{name}</span>
      </div>
      <button
        className={isSelected ? styles.selectedButton : styles.unselectedButton}
        onClick={() => onSelect(name)}
      >
        {isSelected ? "선택됨" : "선택"}
      </button>
    </div>
  );
}

export default RegionList;
