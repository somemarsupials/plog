import { renderFile } from "ejs";

import { Store } from "@app/types";
import { addDaysToDate, formatDateForDisplay } from "@app/helper";

const getContent = async (date: Date, store: Store) => {
  try {
    return await store.read(date);
  } catch (error) {
    return "";
  }
};

export const _renderEditLogView = (_renderFile: typeof renderFile) => (
  store: Store
) => async (date: Date): Promise<string> => {
  return renderFile(`${__dirname}/template.ejs`, {
    content: await getContent(date, store),
    today: formatDateForDisplay(date),
    tomorrow: formatDateForDisplay(addDaysToDate(date, 1)),
    yesterday: formatDateForDisplay(addDaysToDate(date, -1))
  });
};

export const renderEditLogView = _renderEditLogView(renderFile);
