import { createTheme } from "@mui/material/styles";

import "@fontsource/nunito-sans/400.css";
import "@fontsource/nunito-sans/600.css";
import "@fontsource/nunito-sans/700.css";

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Nunito Sans",
      fontWeight: "400",
      fontSize: "18px",
      color: '#7C8DB0'
    },
    h1: {
      fontSize: "24px",
      fontWeight: "700",
      fontSize: "24px",
      paddingBottom: "16px",
      color: "#605DEC"
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
      fontSize: "18px",
      paddingBottom: "24px",
      paddingTop: "36px",
      color: "#6E7491"
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      },

      MuiInputBase: {
        styleOverrides: {
          root: {
            borderRadius: 4,
            border: "1px solid #A1B0CC",
            color: "#7C8DB0"
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          border: "1px solid #605DEC",
          color: "#605DEC",
          textTransform: "none",
          marginTop: "75px"
        }
      }
    }
  }
});

export default theme;