import { RiCalendarCheckLine } from "react-icons/ri";
import { useRecoilValue } from "recoil";

import styles from "./DateWrapper.module.scss";

import { DatePickerIsValued, DatePickerState } from "@/recoil/detail/detail";

function DateWrapper({ onOpen }: { onOpen: () => void }) {
  const time = useRecoilValue<Date>(DatePickerState);
  const isValued = useRecoilValue<boolean>(DatePickerIsValued);

  return (
    <>
      <div className={styles.container} onClick={onOpen}>
        <div className={styles.container__dateWrapper}>
          {isValued ? (
            <>
              <RiCalendarCheckLine fontSize="2.4rem" />
              <span>{`${time.getFullYear()}년 ${
                time.getMonth() + 1
              }월 방문`}</span>
            </>
          ) : (
            <>
              <RiCalendarCheckLine fontSize="2.4rem" color="#CDCFD0" />
              <span style={{ color: "#CDCFD0" }}>언제 방문하셨나요?</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DateWrapper;
