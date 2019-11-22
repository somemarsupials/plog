import * as path from 'path';

const getFsRoot = (): string => {
  // TODO retrieve from configuration
  return '/Users/theobreuer-weil/logs/';
};

export const getFilePathFromDate = (date:Date):string => {
  return path.join(
    getFsRoot(),
    date.getFullYear().toString(),
    (date.getMonth() + 1).toString().padStart(2, '0'),
    `${date.getDate().toString().padStart(2, '0')}.md`
  );
};
