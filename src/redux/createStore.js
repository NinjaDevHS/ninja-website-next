import React from "react";

const isServer = typeof window === "undefined";

import { serverSideRenderMiddleWare } from "../../middleware/ssr";

import initializeStore from "./reduxStore";

const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

const getOrCreateStore = (initialState = {}) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
};

const rootApp = (App) => {
  return class AppWithRedux extends React.Component {
    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    static async getInitialProps(appContext) {
      const { ctx } = appContext;
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      let reduxStore = getOrCreateStore();

      // We are Server Side, if yes Hydrate the Redux-Store ?
      if (ctx?.req) {
        await serverSideRenderMiddleWare(ctx.req, ctx.res, reduxStore).catch(
          (err) => {
            console.warn("Error hydrates, session timeout", err);
          }
        );
      }

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default rootApp;
