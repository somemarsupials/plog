import strftime from "strftime";

export const formatDateForDisplay = (date: Date): string => {
  return strftime("%Y/%m/%d", date);
};
