import React, { ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import EditRoadOutlinedIcon from "@mui/icons-material/EditRoadOutlined";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import Link from "components/commons/elements/links/Link";
import GitBanner from "components/commons/shared/banners/GitBanner";
import Footer from "components/commons/shared/footer/Footer";

import { initMetaMask } from "redux/handlers/walletHandler";

interface IProps {
  children: ReactElement;
}

const DesktopLayout = ({ children }: IProps): ReactElement => {
  const dispatch = useDispatch();

  const wallet = useSelector((state: any) => state.wallet);

  const [loadingWallet, setLoadingWallet] = useState<boolean>(false);

  const handleConnectWallet = async () => {
    setLoadingWallet(true);
    await dispatch(initMetaMask());
    setLoadingWallet(false);
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
            justifyContent: "space-between"
          }}>
          <Stack direction="row" spacing={4}>
            <Link linkTo={`/`} sx={{ display: "flex", alignItems: "center" }}>
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
            <Button
              disabled={loadingWallet}
              onClick={handleConnectWallet}
              startIcon={
                loadingWallet ? (
                  <CircularProgress />
                ) : (
                  <AccountBalanceWalletOutlinedIcon />
                )
              }
              color="secondary"
              variant="contained"
              sx={{ width: 250, ml: 4 }}>
              {wallet.isConnected
                ? `Connected : ${wallet.walletProvider}`
                : `Connect Your Wallet`}
            </Button>
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
};

export default DesktopLayout;
