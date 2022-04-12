import { createSelector } from "@reduxjs/toolkit";

import { IAppConfigTypes } from "types/state/appConfigTypes";

export const getAppConfig = (state): IAppConfigTypes => state.appConfig;

export const getIsPhone = createSelector(
  getAppConfig,
  (appConfig): boolean => appConfig.isPhone
);

export const getContractChainId = createSelector(
  getAppConfig,
  (appConfig: IAppConfigTypes) => {
    return appConfig.nftConfig.chain_id;
  }
);

export const getContractAddress = createSelector(
  getAppConfig,
  (appConfig: IAppConfigTypes) => {
    return appConfig.nftConfig.address;
  }
);

export const getContractAbi = createSelector(
  getAppConfig,
  (appConfig: IAppConfigTypes) => {
    return appConfig.nftConfig.abi;
  }
);
