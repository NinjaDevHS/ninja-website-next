import {
  Action,
  configureStore,
  StateFromReducersMapObject
} from "@reduxjs/toolkit";
import { NextPageContext } from "next";
import { ThunkDispatch } from "redux-thunk";

import appConfig from "redux/reducers/appConfigReducer";
import walletReducer from "redux/reducers/walletReducer";

const rootReducer = {
  [appConfig.name]: appConfig.reducer,
  [walletReducer.name]: walletReducer.reducer
};

export type AppState = Partial<StateFromReducersMapObject<typeof rootReducer>>;

const initializeStore = (initialState: AppState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    devTools: true
  });
};

export default initializeStore;
export type AppDispatch = ThunkDispatch<AppState, void, Action>;
export type RootStore = ReturnType<typeof initializeStore>;
export interface IPageContext extends NextPageContext {
  reduxStore: RootStore;
}
