import styles from './MapPinNumber.module.scss';

const MapPinNumber = ({number}: {number: number}) => {
  return (
    <div className={styles.container}>
      <p className={styles.number}>{number}</p>
    </div>
  );
};

export default MapPinNumber;
