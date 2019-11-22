import * as fs from 'fs';
import { promisify } from 'util';

import { ReadLog } from '@app/types';
import { getFilePathFromDate } from './helpers';

const readFile = promisify(fs.readFile);

export const _read = (
  _getFilePathFromDate: typeof getFilePathFromDate,
  _readFile: typeof readFile,
): ReadLog => async (date: Date) => {
  return (await _readFile(_getFilePathFromDate(date))).toString();
};

export const read = _read(
  getFilePathFromDate,
  readFile,
);
