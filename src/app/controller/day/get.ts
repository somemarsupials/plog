import { RequestHandler } from 'express';

import { requestParametersToDate } from '@app/helper';
import { Store } from '@app/types';

export const _getLogByDate = () => (store: Store): RequestHandler => async (req, res) => {
  try {
    const date = requestParametersToDate(req.params)

    return res
      .status(200)
      .send(await store.read(date));
  } catch (error) {
    console.error(error);
    return res.status(500).send('failed');
  };
}

export const getLogByDate = _getLogByDate();
