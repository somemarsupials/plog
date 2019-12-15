import { RequestHandler } from 'express';

import { RequestHandlerWithStore, Store } from '@app/types';

export const withStore = (store: Store, handler: RequestHandlerWithStore): RequestHandler => {
  return (req, res) => handler(store, req, res);
}
