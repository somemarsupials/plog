import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

import { WriteLog } from '@app/types';
import { getFilePathFromDate } from './helpers';

export const _write = (
  _getFilePathFromDate: typeof getFilePathFromDate,
  _mkdir: typeof fs.mkdir,
  _writeFile: typeof fs.writeFile,
): WriteLog => async (date: Date, content: string) => {
  const filePath = _getFilePathFromDate(date);

  await promisify(_mkdir)(path.dirname(filePath), { recursive: true });
  await promisify(_writeFile)(filePath, content, {});
};

export const write = _write(
  getFilePathFromDate,
  fs.mkdir,
  fs.writeFile,
);
