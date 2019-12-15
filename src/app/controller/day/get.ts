import { requestParametersToDate } from "@app/helper";
import { renderLogView } from "@app/view";
import { RequestHandlerWithStore } from "@app/types";

export const _getLogByDate = (
  _requestParametersToDate: typeof requestParametersToDate,
  _renderLogView: typeof renderLogView
): RequestHandlerWithStore => async (store, req, res): Promise<void> => {
  try {
    const date = _requestParametersToDate(req.params);

    res.status(200).send(await _renderLogView(store)(date));
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send("failed");
    return;
  }
};

export const getLogByDate = _getLogByDate(
  requestParametersToDate,
  renderLogView
);
