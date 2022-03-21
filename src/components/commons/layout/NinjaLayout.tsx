import React, { ReactElement } from "react";
import { useSelector } from "react-redux";

import Stack from "@mui/material/Stack";

import DesktopLayout from "components/commons/layout/DesktopLayout";
import MobileLayout from "components/commons/layout/MobileLayout";

import { getIsPhone } from "redux/selectors/appConfigSelector";

interface IProps {
  children: ReactElement;
}

const NinjaLayout = ({ children }: IProps): ReactElement => {
  const isPhone = useSelector(getIsPhone);

  return (
    <Stack
      sx={{
        minHeight: "100vh"
      }}>
      {isPhone ? (
        <MobileLayout>{children}</MobileLayout>
      ) : (
        <DesktopLayout>{children}</DesktopLayout>
      )}
    </Stack>
  );
};

export default NinjaLayout;
