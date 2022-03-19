import React, { ReactElement } from "react";
import { NextPage } from "next";

import NinjaLayout from "components/commons/layout/NinjaLayout";
import Home from "components/containers/home/Home";

const HomePage: NextPage = (): ReactElement => {
  return (
    <NinjaLayout>
      <Home />
    </NinjaLayout>
  );
};

export default HomePage;
