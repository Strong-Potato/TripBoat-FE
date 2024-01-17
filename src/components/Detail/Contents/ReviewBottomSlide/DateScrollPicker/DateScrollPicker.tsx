import { useState } from "react";
import DatePicker from "react-mobile-datepicker";
import { useRecoilState } from "recoil";

import { DatePickerIsValued, DatePickerState } from "@/recoil/detail/detail";

import { DateScrollPickerProps } from "@/types/detail";

interface DateConfig {
  year: {
    format: string;
    caption: string;
    step: number;
  };
  month: {
    format: string;
    caption: string;
    step: number;
  };
}
function DateScrollPicker({ slideOnClose }: DateScrollPickerProps) {
  const [time, setTime] = useRecoilState<Date>(DatePickerState);
  const [isValued, setIsValued] = useRecoilState<boolean>(DatePickerIsValued);
  const [isOpen, setIsOpen] = useState(false);

  const handleCancel = () => {
    slideOnClose();
    // setIsOpen(false);
  };

  const handleSelect = (time: Date) => {
    if (!isValued) {
      setIsValued(true);
    }
    setTime(time);
    slideOnClose();
  };

  const dateConfig: DateConfig = {
    year: {
      format: "YYYY",
      caption: "Year",
      step: 1,
    },
    month: {
      format: "MM",
      caption: "Mon",
      step: 1,
    },
  };

  return (
    <>
      <DatePicker
        dateConfig={dateConfig}
        theme={"ios"}
        value={time}
        min={new Date(1999, 0, 1)}
        max={new Date()}
        isOpen={isOpen}
        onSelect={handleSelect}
        onCancel={handleCancel}
        isPopup={false}
        headerFormat={"YYYY년 MM월"}
        showHeader={false}
        confirmText="선택"
        cancelText="취소"
      />
    </>
  );
}

export default DateScrollPicker;
