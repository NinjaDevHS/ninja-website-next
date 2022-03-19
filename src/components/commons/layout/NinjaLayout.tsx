import React, { ReactElement } from "react";

import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import GitBanner from "../shared/banners/GitBanner";
import Footer from "../shared/footer/Footer";
import { Button } from "@mui/material";

interface IProps {
  children: ReactElement;
}

const NinjaLayout = ({ children }: IProps): ReactElement => {
  return (
    <Stack
      sx={{
        minHeight: "100vh"
      }}>
      <AppBar
        position="static"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          height: 54,
          p: 2
        }}>
        <Button color="secondary" variant="contained" sx={{ width: 250 }}>
          Connect Your Wallet
        </Button>
        <Toolbar />
      </AppBar>
      <GitBanner />
      <Container>
        {children}
        <Footer />
      </Container>
    </Stack>
  );
};

export default NinjaLayout;
