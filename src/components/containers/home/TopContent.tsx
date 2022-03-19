import React, { ReactElement, useEffect, useState } from "react";
import Image from "next/image";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const TopContent = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setVisible(!visible);
    }, 500);
  }, [visible]);

  return (
    <Grid container spacing={8}>
      <Grid item xs={12} sm={6} p={8}>
        <Typography variant="h2" fontWeight={530}>
          &gt; Ninja
          <br />
          Developer
          <br />
          Hacking
          <br />
          Squad {visible && `▮`}
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="justify"
          pt={4}
          fontWeight="bold">
          Get an NFT representing a programming language keyword, and join the
          most elite programmers you can dream of(*). Supply is limited (yes,
          we&rsquo;re stating the obvious) and new programming languages are not
          born often.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        alignItems="center"
        justifyContent="center"
        sx={{ display: "flex" }}>
        <Stack
          sx={{
            border: "1px solid gray",
            boxShadow: "0px 5px 30px 8px rgba(0,0,0,0.51)"
          }}>
          <Image src="/images/hero.gif" width={400} height={400} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default TopContent;
