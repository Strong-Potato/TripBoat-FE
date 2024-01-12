import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from "date-fns";

function formatTimeAgo(date: Date) {
  const now = new Date();
  const secondsAgo = differenceInSeconds(now, date);
  const minutesAgo = differenceInMinutes(now, date);
  const hoursAgo = differenceInHours(now, date);
  const daysAgo = differenceInDays(now, date);

  if (secondsAgo < 60) {
    return `${secondsAgo}초 전`;
  } else if (minutesAgo < 60) {
    return `${minutesAgo}분 전`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo}시간 전`;
  } else if (daysAgo < 7) {
    return `${daysAgo}일 전`;
  } else {
    return format(date, "yy.MM.dd");
  }
}

export default formatTimeAgo;
