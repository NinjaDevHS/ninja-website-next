import React from "react";
import { Provider } from "react-redux";
import { NextComponentType, NextPageContext } from "next";
import App from "next/app";
import withReduxStore from "redux/createStore";
// Theme Style
import AppTheme from "style/appTheme";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import MetaMaskWrapper from "../src/components/wrappers/MetaMaskWrapper";

interface IAppContainer {
  Component: NextComponentType<NextPageContext, any, Record<string, unknown>>;
  pageProps: any;
  reduxStore: any;
}

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this
      .props as unknown as IAppContainer;
    return (
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <Provider store={reduxStore}>
          <MetaMaskWrapper>
            <Component {...pageProps} />
          </MetaMaskWrapper>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default withReduxStore(MyApp);
