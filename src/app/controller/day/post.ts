import { RequestHandler } from "express";

import {
  formatDateForDisplay,
  requestParametersToDate
} from "@app/helper";

import { Store } from "@app/types";

export const _createLogByDate = () => (store: Store): RequestHandler => async (
  req,
  res
) => {
  try {
    const date = requestParametersToDate(req.params);
    await store.write(date, req.body.content);
    return res.redirect(`/${formatDateForDisplay(date)}`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("failed\n");
  }
};

export const createLogByDate = _createLogByDate();
