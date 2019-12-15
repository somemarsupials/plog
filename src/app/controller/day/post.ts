import { formatDateForDisplay, requestParametersToDate } from "@app/helper";
import { RequestHandlerWithStore } from "@app/types";

export const _createLogByDate = (): RequestHandlerWithStore => async (store,
  req,
  res
): Promise<void> => {
  try {
    const date = requestParametersToDate(req.params);
    await store.write(date, req.body.content);
    res.redirect(`/${formatDateForDisplay(date)}`);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send("failed\n");
    return;
  }
};

export const createLogByDate = _createLogByDate();
