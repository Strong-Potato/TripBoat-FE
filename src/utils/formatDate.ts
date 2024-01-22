import { format } from "date-fns";

const createDate = (date: string) => {
  const arrayForm = date.split("-").map((el) => Number(el));

  return new Date(arrayForm[0], arrayForm[1] - 1, arrayForm[2]);
};

const changeDOWFormat = (format: string) => {
  let result = format;

  if (result.includes("Su")) {
    result = result.replace(/Su/g, "일");
  }
  if (result.includes("Mo")) {
    result = result.replace(/Mo/g, "월");
  }
  if (result.includes("Tu")) {
    result = result.replace(/Tu/g, "화");
  }
  if (result.includes("We")) {
    result = result.replace(/We/g, "수");
  }
  if (result.includes("Th")) {
    result = result.replace(/Th/g, "목");
  }
  if (result.includes("Fr")) {
    result = result.replace(/Fr/g, "금");
  }
  if (result.includes("Sa")) {
    result = result.replace(/Sa/g, "토");
  }

  return result;
};

// ex) 1.17(금) - 1.19(일)
export const setSpaceDate_DOW = (start: string, end: string) => {
  const startFormat = format(createDate(start), "M.dd(EEEEEE)");
  const endFormat = format(createDate(end), "M.dd(EEEEEE)");

  if (end) {
    return changeDOWFormat(`${startFormat} - ${endFormat}`);
  } else {
    return changeDOWFormat(startFormat);
  }
};

// ex) 2024.01.12 - 2024.01.14
export const setSpaceDate = (start: string, end: string) => {
  const startFormat = format(createDate(start), "yyyy.MM.dd");
  const endFormat = format(createDate(end), "yyyy.MM.dd");

  if (end) {
    return `${startFormat} - ${endFormat}`;
  } else {
    return startFormat;
  }
};

// ex) 2024년 6월
export const setMyReviewDate = (visitedAt: string) => {
  const visitFormat = format(createDate(visitedAt), "yyyy'년' M'월'");
  return visitFormat;
};
