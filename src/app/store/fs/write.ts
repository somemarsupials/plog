import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

import { WriteLog } from '@app/types';
import { getFilePathFromDate } from './helpers';

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

export const _write = (
  _getFilePathFromDate: typeof getFilePathFromDate,
  _mkdir: typeof mkdir,
  _writeFile: typeof writeFile,
): WriteLog => async (date: Date, content: string) => {
  const filePath = _getFilePathFromDate(date);

  await _mkdir(path.dirname(filePath), { recursive: true });
  await _writeFile(filePath, content, {});
};

export const write = _write(
  getFilePathFromDate,
  mkdir,
  writeFile
);
