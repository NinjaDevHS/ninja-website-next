// Custom action on server-side-request

import { hydrateStore } from "../src/redux/handlers/hydrateStore";

export const serverSideRenderMiddleWare = async (
  req,
  res,
  reduxStore
): Promise<void> => {
  const { dispatch } = reduxStore;
  await dispatch(hydrateStore(req.headers["user-agent"]));
};
