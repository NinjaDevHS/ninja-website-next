import React, { ReactElement } from "react";
import { NextPage } from "next";

import Container from "@mui/material/Container";

import Home from "components/containers/home/Home";

interface IProps {
  userAgent?: string;
}

const HomePage: NextPage<IProps> = (): ReactElement => {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default HomePage;
