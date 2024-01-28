import DatePicker from 'react-mobile-datepicker';

import {DateScrollPickerProps} from '@/types/detail';

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
function DateScrollPicker({time, setTime, isValued, setIsValued, slideOnClose}: DateScrollPickerProps) {
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
      format: 'YYYY',
      caption: 'Year',
      step: 1,
    },
    month: {
      format: 'MM',
      caption: 'Mon',
      step: 1,
    },
  };

  return (
    <>
      <DatePicker
        dateConfig={dateConfig}
        theme={'ios'}
        value={time}
        min={new Date(1999, 0, 1)}
        max={new Date()}
        onSelect={handleSelect}
        onCancel={handleCancel}
        isPopup={false}
        headerFormat={'YYYY년 MM월'}
        showHeader={false}
        confirmText='선택'
        cancelText='취소'
      />
    </>
  );
}

export default DateScrollPicker;
