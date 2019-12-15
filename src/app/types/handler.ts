import { Request, Response } from 'express';

import { Store } from './store';

export type RequestHandlerWithStore = (
  store: Store,
  req: Request,
  res: Response
) => Promise<void>;
