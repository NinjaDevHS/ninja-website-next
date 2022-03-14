import { CSSProperties } from "react";

import { createTheme } from "@mui/material/styles";
import { Typography } from "@mui/material/styles/createTypography";

import palette from "./palette";

interface TypographyCustom extends Partial<Typography> {
  boxTitle?: CSSProperties;
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    boxTitle: true;
  }
}

const typography: TypographyCustom = {
  boxTitle: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "1px",
    textAlign: "left",
    textTransform: "uppercase"
  }
};

const AppTheme = createTheme({
  spacing: 4,
  shape: {
    borderRadius: 8
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F9FAFE",
          th: {
            whiteSpace: "nowrap",
            fontSize: 11,
            textTransform: "uppercase"
          }
        }
      }
    }
  },
  typography,
  palette: palette
});

export default AppTheme;
