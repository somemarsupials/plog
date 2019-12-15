import { requestParametersToDate } from "@app/helper";
import { renderEditLogView } from "@app/view";
import { RequestHandlerWithStore } from "@app/types";

export const _editLogByDate = (
  _requestParametersToDate: typeof requestParametersToDate,
  _renderEditLogView: typeof renderEditLogView
): RequestHandlerWithStore => async (store, req, res): Promise<void> => {
  try {
    const date = _requestParametersToDate(req.params);

    res.status(200).send(await _renderEditLogView(store)(date));
    return;
  } catch (error) {
    console.error(error);
    res.status(500).send("failed");
    return;
  }
};

export const editLogByDate = _editLogByDate(
  requestParametersToDate,
  renderEditLogView
);
