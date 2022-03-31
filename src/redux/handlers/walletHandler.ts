import { CombinedState, Dispatch } from "@reduxjs/toolkit";

import walletReducer from "redux/reducers/walletReducer";

import { connectWithMetaMask } from "service/wallets/metamask";

export const initMetaMask =
  () => async (dispatch: Dispatch, getState: CombinedState<any>) => {
    try {
      const configNetworkId = getState().appConfig.nftConfig.chain_id;
      const { walletProvider, account } = await connectWithMetaMask(
        configNetworkId
      );
      dispatch(
        walletReducer.actions.setConnection({
          isConnected: true,
          walletProvider,
          account
        })
      );
    } catch (e) {
      console.log("ERROR initMetaMask", e.message);
      dispatch(walletReducer.actions.disconnect());
    }
  };
