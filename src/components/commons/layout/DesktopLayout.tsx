import React, { ReactElement } from "react";

import { isNil } from "ramda";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import Link from "components/commons/elements/links/Link";
import GitBanner from "components/commons/shared/banners/GitBanner";
import Footer from "components/commons/shared/footer/Footer";
import { MetaMaskContext } from "components/wrappers/MetaMaskWrapper";

interface IProps {
  children: ReactElement;
}

const DesktopLayout = ({ children }: IProps): ReactElement => {
  return (
    <MetaMaskContext.Consumer>
      {({ account, isLoadingInit, mint, connectWithMetaMask }) => {
        return (
          <>
            <AppBar
              position="static"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: 54,
                p: 2
              }}>
              <Container
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}>
                <Stack direction="row" spacing={4}>
                  <Link
                    linkTo={`/`}
                    sx={{ display: "flex", alignItems: "center" }}>
                    <img src="/images/ninja-logo.png" width={40} />
                  </Link>
                  <Link
                    linkTo={`/roadmap`}
                    sx={{ display: "flex", alignItems: "center" }}>
                    <EditRoadOutlinedIcon sx={{ mr: 2 }} />
                    RoadMap
                  </Link>
                </Stack>
                <Stack>
                  {!isNil(account) ? (
                    <Button
                      onClick={mint}
                      color="secondary"
                      variant="contained"
                      sx={{ width: 250, ml: 4 }}>
                      MINT
                    </Button>
                  ) : (
                    !isLoadingInit && (
                      <Button
                        disabled={isLoadingInit}
                        onClick={connectWithMetaMask}
                        startIcon={<AccountBalanceWalletOutlinedIcon />}
                        color="secondary"
                        variant="contained"
                        sx={{ width: 250, ml: 4 }}>
                        Connect MetaMask
                      </Button>
                    )
                  )}
                </Stack>
              </Container>
              <Toolbar />
            </AppBar>
            <GitBanner />
            <Container>
              {children}
              <Footer />
            </Container>
          </>
        );
      }}
    </MetaMaskContext.Consumer>
  );
};

export default DesktopLayout;
