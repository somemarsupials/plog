import { Router } from 'express';

import { constructDayRouter } from '@app/controller';
import { Store } from '@app/types';

export const constructMonthRouter = (store: Store): Router => {
  const router = Router({ mergeParams: true });

  router.get('/', (req, res) => {
    const params = JSON.stringify(req.params);
    res.status(200).send(`You accessed a month: ${params}`);
  });

  router.use('/:day', constructDayRouter(store));

  return router;
};
