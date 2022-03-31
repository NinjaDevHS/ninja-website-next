import { createSlice, Draft } from "@reduxjs/toolkit";
import config from "configs/config.json";

import { isNil } from "ramda";

import { IAppConfigTypes } from "types/state/appConfigTypes";

const initialState: IAppConfigTypes = {
  device: null,
  isPhone: false,
  nftConfig: config
};

const authReducer = createSlice({
  name: "appConfig",
  initialState,
  reducers: {
    setDevice: (state: Draft<IAppConfigTypes>, { payload }) => {
      const { device, isPhone } = payload;
      state.device = isNil(device) ? "Browser" : device;
      state.isPhone = isPhone;
    }
  }
});

export default authReducer;
