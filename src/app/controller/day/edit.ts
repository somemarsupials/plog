import { RequestHandler } from "express";

import { requestParametersToDate } from "@app/helper";
import { renderEditLogView } from "@app/view";
import { Store } from "@app/types";

export const _editLogByDate = () => (store: Store): RequestHandler => async (
  req,
  res
) => {
  try {
    const date = requestParametersToDate(req.params);

    return res.status(200).send(await renderEditLogView(store)(date));
  } catch (error) {
    console.error(error);
    return res.status(500).send("failed");
  }
};

export const editLogByDate = _editLogByDate();
