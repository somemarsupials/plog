import { Router } from "express";

import { constructMonthRouter } from "@app/controller";
import { Store } from "@app/types";

export const constructYearRouter = (store: Store): Router => {
  const router = Router({ mergeParams: true });

  router.get("/", (req, res) => {
    const params = JSON.stringify(req.params);
    res.status(200).send(`You accessed a year: ${params}`);
  });

  router.use("/:month", constructMonthRouter(store));

  return router;
};
