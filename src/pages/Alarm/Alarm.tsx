import styles from "./Alarm.module.scss";

import Back from "@/components/Alarm/Back/Back";
import TabCapsule from "@/components/Alarm/TabCapsule/TabCapsule";

function Alarm() {
  return (
    <div className={styles.container}>
      <Back />
      <TabCapsule />
    </div>
  );
}

export default Alarm;
