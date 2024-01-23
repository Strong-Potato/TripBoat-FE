export default function titleCaseChange(title: string) {
  const regex = /^([^[]+)/;
  const titleMatch = title.match(regex);
  const titleData = titleMatch && titleMatch.length > 1 ? titleMatch[1].trim() : title;
  return titleData;
}
