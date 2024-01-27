// ex) 2024년 6월
export const checkDDay = (dueDate: number) => {
  if (!dueDate || dueDate === 0) return `D-day`;
  else if (dueDate > 0) return `D-${dueDate}`;
  else return '지난 여행';
};
