import { differenceInCalendarDays } from "date-fns";

export const printDayNight = (start: Date, end: Date): string => {
  const nights = differenceInCalendarDays(end, start);
  const days = nights + 1;

  return `(${nights}박 ${days}일)`;
}