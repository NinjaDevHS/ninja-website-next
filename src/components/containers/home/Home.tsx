import React, { ReactElement } from "react";

import Stack from "@mui/material/Stack";

import GitBanner from "components/commons/shared/banners/GitBanner";
import { Typography } from "@mui/material";

const Home = (): ReactElement => {
  return (
    <>
      <GitBanner />
      <Stack>
        <Typography variant="h2">
          &gt; Ninja
          <br />
          Developer
          <br />
          Hacking
          <br />
          Squad ▮
        </Typography>
      </Stack>
    </>
  );
};

export default Home;
