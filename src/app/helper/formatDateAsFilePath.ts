import * as path from "path";
import strftime from "strftime";

export const formatDateAsFilePath = (root: string, date: Date): string => {
  return path.join(
    root,
    strftime("%Y", date),
    strftime("%m", date),
    `${strftime("%d", date)}.md`
  );
};
