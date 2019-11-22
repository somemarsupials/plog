import * as fs from 'fs';

import { ReadLog } from '@app/types';
import { getFilePathFromDate } from './helpers';

export const _read = (
  _getFilePathFromDate: typeof getFilePathFromDate,
  _readFile: typeof fs.readFile,
): ReadLog => async (date: Date) => {
  return new Promise((resolve, reject) => {
    _readFile(_getFilePathFromDate(date), (err, data) => {
      return err ? reject(err) : resolve(data.toString());
    });
  });
};

export const read = _read(
  getFilePathFromDate,
  fs.readFile,
);
