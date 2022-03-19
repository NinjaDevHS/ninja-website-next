import React, { ReactElement } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Link from "components/commons/elements/links/Link";

const GitBanner = (): ReactElement => {
  return (
    <Stack p={1} alignItems="center" sx={{ backgroundColor: "secondary.main" }}>
      <Typography variant="caption">
        This is a sample minting website on Rinkeby (but with fully working
        functionalities) for a sample NFT collection, developed for educational
        purposes. Everything is open source and
        <Typography
          px={1}
          variant="caption"
          sx={{ textDecoration: "underline" }}>
          <Link
            href="https://github.com/NinjaDevHS"
            target="_blank"
            rel="noreferrer">
            available on GitHub!
          </Link>
        </Typography>
      </Typography>
    </Stack>
  );
};

export default GitBanner;
