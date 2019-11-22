export const addDaysToDate = (date: Date, numberOfDays: number): Date => {
  const newDate = new Date(date.valueOf());
  newDate.setDate(date.getDate() + numberOfDays);

  return newDate;
};
