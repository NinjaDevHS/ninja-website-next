import { Dispatch } from "@reduxjs/toolkit";
import MobileDetect from "mobile-detect";

import appConfigReducer from "redux/reducers/appConfigReducer";

export const hydrateStore =
  (userAgent: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const md = await new MobileDetect(userAgent);
    const isPhone = md.phone() !== null;
    const device = md.mobile();

    dispatch(appConfigReducer.actions.setDevice({ isPhone, device }));
  };
