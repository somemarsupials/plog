import { RequestHandler } from "express";

import { requestParametersToDate } from "@app/helper";
import { Store } from "@app/types";

export const _createLogByDate = () => (store: Store): RequestHandler => async (
  req,
  res
) => {
  try {
    const date = requestParametersToDate(req.params);

    console.log(req.body);
    return res.status(200).send(await store.write(date, req.body));
  } catch (error) {
    console.error(error);
    return res.status(500).send("failed\n");
  }
};

export const createLogByDate = _createLogByDate();
