import React, { ReactElement } from "react";
import Image from "next/image";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Link from "components/commons/elements/links/Link";

const Footer = (): ReactElement => {
  return (
    <Stack p={4}>
      <Typography variant="caption">
        ©2022 Ninja Developer Hacking Squad. All right reserved (like it was
        worth saying...)
      </Typography>
      <Stack direction="row" justifyContent="flex-end">
        <Link href="https://discord.gg/E7wTVDFwPg" target="_blank">
          <Image
            alt="discord"
            src="/images/discord.png"
            width={40}
            height={40}
          />
        </Link>{" "}
        <Link href="https://twitter.com/NinjaDevHS" target="_blank">
          <Image
            alt="discord"
            src="/images/twitter.png"
            width={40}
            height={40}
          />
        </Link>
      </Stack>
    </Stack>
  );
};

export default Footer;
