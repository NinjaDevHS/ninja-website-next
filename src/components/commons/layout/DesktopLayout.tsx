import React, { ReactElement, useState } from "react";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import Link from "components/commons/elements/links/Link";
import GitBanner from "components/commons/shared/banners/GitBanner";
import Footer from "components/commons/shared/footer/Footer";

import { ethEnabled } from "service/wallets/metamask";

interface IProps {
  children: ReactElement;
}

const DesktopLayout = ({ children }: IProps): ReactElement => {
  const [loadingWallet, setLoadingWallet] = useState<boolean>(false);

  const handleConnectWallet = async () => {
    await ethEnabled();
  };

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
            justifyContent: "flex-end"
          }}>
          <EditRoadOutlinedIcon sx={{ mr: 2 }} />
          <Link linkTo={`/roadmap`}>RoadMap</Link>
          <Button
            onClick={handleConnectWallet}
            startIcon={<AccountBalanceWalletOutlinedIcon />}
            color="secondary"
            variant="contained"
            sx={{ width: 250, ml: 4 }}>
            Connect Your Wallet
          </Button>
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
};

export default DesktopLayout;
