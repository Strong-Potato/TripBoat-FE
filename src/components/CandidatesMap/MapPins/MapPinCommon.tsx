import styles from './MapPinCommon.module.scss';

const MapPinCommon = ({number}: {number: number | undefined}) => {
  return <div className={styles.container}>{number && <p className={styles.number}>{number}</p>}</div>;
};

export default MapPinCommon;
