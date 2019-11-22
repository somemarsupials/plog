import * as fs from "fs";
import * as path from "path";
import { promisify } from "util";

import { WriteLog } from "@app/types";
import { formatDateAsFilePath } from "@app/helper";

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

export const _write = (
  _formatDateAsFilePath: typeof formatDateAsFilePath,
  _mkdir: typeof mkdir,
  _writeFile: typeof writeFile
) => (root: string): WriteLog => async (date: Date, content: string) => {
  const filePath = _formatDateAsFilePath(root, date);

  await _mkdir(path.dirname(filePath), { recursive: true });
  await _writeFile(filePath, content, {});
};

export const write = _write(formatDateAsFilePath, mkdir, writeFile);
