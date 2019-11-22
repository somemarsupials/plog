import * as fs from "fs";
import { promisify } from "util";

import { formatDateAsFilePath } from "@app/helper";
import { ReadLog } from "@app/types";

const readFile = promisify(fs.readFile);

export const _read = (
  _formatDateAsFilePath: typeof formatDateAsFilePath,
  _readFile: typeof readFile
) => (root: string): ReadLog => async (date: Date) => {
  return (await _readFile(_formatDateAsFilePath(root, date))).toString();
};

export const read = _read(formatDateAsFilePath, readFile);
