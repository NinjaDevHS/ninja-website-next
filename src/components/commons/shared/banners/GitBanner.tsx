import React, { ReactElement } from "react";

import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

const GitBanner = (): ReactElement => {
  return (
    <Stack p={1} sx={{ backgroundColor: "secondary.main" }}>
      <Typography variant="caption">
        This is a sample minting website on Rinkeby (but with fully working
        functionalities) for a sample NFT collection, developed for educational
        purposes. Everything is open source and
        <Typography
          px={1}
          variant="caption"
          sx={{ textDecoration: "underline" }}>
          <a
            href="https://github.com/NinjaDevHS"
            target="_blank"
            rel="noreferrer">
            available on GitHub!
          </a>
        </Typography>
      </Typography>
    </Stack>
  );
};

export default GitBanner;
