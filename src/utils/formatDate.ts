import { format } from "date-fns";

const createDate = (date: string) => {
  const arrayForm = date.split("-").map((el) => Number(el));

  return new Date(arrayForm[0], arrayForm[1] - 1, arrayForm[2]);
};

export const setMyspaceDate = (start: string, end: string) => {
  const startFormat = format(createDate(start), "yyyy.MM.dd");
  const endFormat = format(createDate(end), "yyyy.MM.dd");

  if (end) {
    return `${startFormat} - ${endFormat}`;
  } else {
    return startFormat;
  }
};

export const setMyReviewDate = (visitedAt: string) => {
  const visitFormat = format(createDate(visitedAt), "yyyy'년' M'월'");
  return visitFormat;
};
