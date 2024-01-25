import styles from './MapPinCommon.module.scss';

const MapPinCommon = ({number}: {number: number}) => {
  return (
    <div className={styles.container}>
      <p className={styles.number}>{number}</p>
    </div>
  );
};

export default MapPinCommon;
