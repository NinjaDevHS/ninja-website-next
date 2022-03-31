import { createSlice, Draft } from "@reduxjs/toolkit";

import { IWallet } from "types/state/walletTypes";

const initialState: IWallet = {
  isConnected: false,
  walletProvider: null,
  account: null
};

const walletReducer = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setConnection: (state: Draft<IWallet>, { payload }): void => {
      const { walletProvider, account } = payload;
      state.isConnected = true;
      state.walletProvider = walletProvider;
      state.account = account;
    },
    disconnect: (): IWallet => initialState
  }
});

export default walletReducer;
