import { renderFile } from "ejs";
import { Converter } from "showdown";

import { formatDateForDisplay } from "@app/helper";
import { Store } from "@app/types";

export const _renderLogView = (
  _converter: Converter,
  _renderFile: typeof renderFile
) => (store: Store) => async (date: Date): Promise<string> => {
  const content = _converter.makeHtml(await store.read(date));

  return renderFile(`${__dirname}/template.ejs`, {
    content,
    today: formatDateForDisplay(date)
  });
};

export const renderLogView = _renderLogView(new Converter(), renderFile);
