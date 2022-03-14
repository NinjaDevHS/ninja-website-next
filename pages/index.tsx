import React, { ReactElement } from "react";
import { NextPage } from "next";

import Container from "@mui/material/Container";

import Home from "components/containers/home/Home";

const HomePage: NextPage = (): ReactElement => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default HomePage;
