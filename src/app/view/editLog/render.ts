import { renderFile } from "ejs";
import { Converter } from "showdown";

import { Store } from "@app/types";

export const _renderEditLogView = (
  _converter: Converter,
  _renderFile: typeof renderFile
) => (store: Store) => async (date: Date): Promise<string> => {
  const content = _converter.makeHtml(await store.read(date));

  return renderFile(`${__dirname}/template/log.ejs`, {
    content
  });
};

export const renderEditLogView = _renderEditLogView(
  new Converter(),
  renderFile
);
