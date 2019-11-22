import { Router } from 'express';

import { Store } from '@app/types';

import { getLogByDate } from './get';
import { createLogByDate } from './post';

export const constructDayRouter = (store: Store): Router => {
  const router = Router({ mergeParams: true });

  router.get('/', getLogByDate(store));
  router.post('/', createLogByDate(store));

  return router;
};
