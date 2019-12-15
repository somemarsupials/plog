import { Router } from "express";

import { withStore } from '@app/helper';
import { Store } from "@app/types";

import { editLogByDate } from "./edit";
import { getLogByDate } from "./get";
import { createLogByDate } from "./post";

export const constructDayRouter = (store: Store): Router => {
  const router = Router({ mergeParams: true });

  router.get("/", withStore(store, getLogByDate));
  router.get("/edit", withStore(store, editLogByDate));
  router.post("/", withStore(store, createLogByDate));

  return router;
};
