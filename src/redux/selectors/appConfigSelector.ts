import { createSelector } from "@reduxjs/toolkit";

import { IAppConfigTypes } from "types/state/appConfigTypes";

export const getAppConfig = (state): IAppConfigTypes => state.appConfig;

export const getIsPhone = createSelector(
  getAppConfig,
  (appConfig): boolean => appConfig.isPhone
);
