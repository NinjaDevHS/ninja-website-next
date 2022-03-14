import React, { ReactElement } from "react";

import Stack from "@mui/material/Stack";

import GitBanner from "components/commons/shared/banners/GitBanner";

const Home = (): ReactElement => {
  return (
    <>
      <GitBanner />
      <Stack>TO-DO</Stack>
    </>
  );
};

export default Home;
