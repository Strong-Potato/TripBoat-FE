import { Button } from "@chakra-ui/react";
import { addYears, format } from "date-fns";
import ko from "date-fns/locale/ko";
import { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { BsCalendarCheck as CalendarIcon } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";
import styles from "./CalendarModal.module.scss";

import BackIcon from "@/assets/back.svg?react";
import { printDayNight } from "@/utils/printDayNight";

function CalendarModal() {
  registerLocale("ko", ko);
  const today = new Date();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  // TODO: 캘린더에서 날짜 바꿀 경우 Day별 일정 처리
  // 1. 박 수가 같은 경우 일정 그대로 유지
  // 2. 박 수가 줄어들 경우 줄어든 박 수만큼의 일정 마지막 날로 합치기 (하루 동선 Max 30개)
  // 3. 박 수가 늘어날 경우 나머지 빈 일정으로 생성

  const handleDatePick = (dates: Array<Date | null>) => {
    const [start, end] = dates;

    if (startDate && endDate) {
      setStartDate(start);
      setEndDate(null);
    } else {
      if (start) setStartDate(start);
      if (end) setEndDate(end);
    }
  };

  useEffect(() => {
    if (startDate) console.log("시작", format(startDate, "yyyy/MM/dd"));
    if (endDate) console.log("끝", format(endDate, "yyyy/MM/dd"));
  }, [startDate, endDate]);

  return (
    <div className={styles.Container}>
      <header>
        <nav>
          <BackIcon />
        </nav>
        <h1>언제 떠나시나요?</h1>
      </header>
      <div className={styles.calendarContainer}>
        {/* FIXME : date picker 수정사항
          1. 달력 첫째주에 지난 달 날짜 보이도록
        */}
        <DatePicker
          selectsRange
          inline
          onChange={handleDatePick}
          startDate={startDate}
          endDate={endDate}
          minDate={today}
          maxDate={addYears(today, 3)}
          locale={ko}
          monthsShown={36}
          dateFormatCalendar="yyyy년 M월"
          renderDayContents={(day) => <span>{day}</span>}
        />
      </div>
      <div className={styles.dateChoiceContainer}>
        <div className={styles.dateChoice}>
          <CalendarIcon size="22px" color="#23272F" />
          <span>{startDate ? format(startDate, "M월 d일") : "시작일"} </span>
          <span>-</span>
          <span>{endDate ? format(endDate, "M월 d일") : "종료일"} </span>
          {startDate && endDate && (
            <span>{printDayNight(startDate, endDate)}</span>
          )}
        </div>
        <Button
          isDisabled={!startDate || !endDate}
          zIndex="3"
          variant="CTAButton"
        >
          {!startDate || !endDate ? "날짜를 선택해주세요" : "선택 완료"}
        </Button>
      </div>
    </div>
  );
}

export default CalendarModal;
