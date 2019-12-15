import * as bodyParser from "body-parser";
import express, { Express } from "express";

import { constructYearRouter } from "@app/controller";
import { Store } from "@app/types";

export const constructApp = (store: Store): Express => {
  const app = express();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/static', express.static(`${__dirname}/view/static`));
  app.use("/:year", constructYearRouter(store));

  return app;
};
