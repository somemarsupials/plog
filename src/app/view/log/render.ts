import { renderFile } from "ejs";
import { Converter } from "showdown";

import { addDaysToDate, formatDateForDisplay } from "@app/helper";
import { Store } from "@app/types";

const getMarkdownContent = async (
  date: Date,
  store: Store,
  _converter: Converter
) => {
  try {
    return _converter.makeHtml(await store.read(date));
  } catch (error) {
    return _converter.makeHtml("Nothing here yet!");
  }
};

export const _renderLogView = (
  _converter: Converter,
  _renderFile: typeof renderFile
) => (store: Store) => async (date: Date): Promise<string> => {
  return renderFile(`${__dirname}/template.ejs`, {
    content: await getMarkdownContent(date, store, _converter),
    today: formatDateForDisplay(date),
    tomorrow: formatDateForDisplay(addDaysToDate(date, 1)),
    yesterday: formatDateForDisplay(addDaysToDate(date, -1))
  });
};

export const renderLogView = _renderLogView(new Converter(), renderFile);
