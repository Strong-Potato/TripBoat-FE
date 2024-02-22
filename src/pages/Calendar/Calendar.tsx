import {Button, useDisclosure} from '@chakra-ui/react';
import {addYears, differenceInBusinessDays, format} from 'date-fns';
import ko from 'date-fns/locale/ko';
import {useEffect, useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import {BsCalendarCheck as CalendarIcon} from 'react-icons/bs';
import {useNavigate, useParams} from 'react-router-dom';

import 'react-datepicker/dist/react-datepicker.css';
import styles from './Calendar.module.scss';

import {useGetSpace, usePutDates} from '@/hooks/Spaces/space';

import ReduceDatesModal from '@/components/TripSpace/CalendarModal/ReduceDatesModal';
import SelectHeader from '@/components/TripSpace/SelectHeader/SelectHeader';

import {createDate} from '@/utils/formatDate';
import {printDayNight} from '@/utils/printDayNight';

function Calendar() {
  registerLocale('ko', ko);
  const today = new Date();
  const {id} = useParams();
  const {data: spaceData} = useGetSpace(Number(id));
  const putDates = usePutDates();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<Date | null>(
    spaceData?.data?.startDate ? createDate(spaceData.data.startDate) : null,
  );
  const [endDate, setEndDate] = useState<Date | null>(
    spaceData?.data?.endDate ? createDate(spaceData.data.endDate) : null,
  );
  const differenceInSpace = differenceInBusinessDays(spaceData?.data?.endDate, spaceData?.data?.startDate);
  const [differenceInCalendar, setDifferenceInCalendar] = useState<number>(0);
  const [isReduced, setIsReduced] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();

  const editDates = async () => {
    if (isReduced) {
      onOpen();
    } else {
      await putDates.mutateAsync({
        spaceId: Number(id),
        startDate: format(startDate!, 'yyyy-MM-dd'),
        endDate: format(endDate!, 'yyyy-MM-dd'),
      });
      navigate(`/trip/${id}`, {state: {id: id}});
    }
  };

  const handleDatePick = (dates: Array<Date | null>) => {
    const [start, end] = dates;

    if (startDate && endDate) {
      setStartDate(start);
      setEndDate(null);
    } else {
      if (start) setStartDate(start);
      if (end) setEndDate(end);
      setDifferenceInCalendar(differenceInBusinessDays(end!, start!));
    }
  };

  useEffect(() => {
    if (Number(differenceInCalendar) < Number(differenceInSpace)) {
      setIsReduced(true);
    } else {
      setIsReduced(false);
    }
  }, [startDate, endDate, differenceInCalendar]);

  return (
    <>
      <div className={styles.Container}>
        <SelectHeader title='언제 떠나시나요?' />
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
            dateFormatCalendar='yyyy년 M월'
            renderDayContents={(day) => <span>{day}</span>}
          />
        </div>
        <div className={styles.dateChoiceContainer}>
          <div className={styles.dateChoice}>
            <CalendarIcon size='22px' color='#23272F' />
            <span>{startDate ? format(startDate, 'M월 d일') : '시작일'} </span>
            <span>-</span>
            <span>{endDate ? format(endDate, 'M월 d일') : '종료일'} </span>
            {startDate && endDate && <span>{printDayNight(startDate, endDate)}</span>}
          </div>
          <Button isDisabled={!startDate || !endDate} zIndex='3' variant='CTAButton' onClick={editDates}>
            {!startDate || !endDate ? '날짜를 선택해주세요' : '선택 완료'}
          </Button>
        </div>
      </div>
      <ReduceDatesModal isOpen={isOpen} onClose={onClose} startDate={startDate!} endDate={endDate!} />
    </>
  );
}

export default Calendar;
