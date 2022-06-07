//mui imports
import { createTheme, Button } from "@mui/material";
import styled from "@emotion/styled";

//custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1760a5",
      light: "skyblue",
    },
    secondary: {
      main: "#15c630",
    },
    tertiary: {
      main: "#999",
    },
  },
  components: {},
});

//custom styles object
const styles = {
  comps: {
    OrangeBtn: {
      background: "linear-gradient(45deg, #FE6B8B, #FF8E53)",
      border: 0,
      borderRadius: 15,
      marginTop: "5px",
      color: "white",
      padding: "5px 30px",
    },
    BlueBtn: {
      background: "skyblue",
      color: "white",
      margin: 5,
      "&:hover": {
        background: "lightblue",
      },
      "&:disabled": {
        background: "gray",
        color: "white",
      },
    },
  },
};

//custom components
const comps = {
  btn: {
    orange: styled(Button)(styles.comps.OrangeBtn),
    blue: styled(Button)(styles.comps.BlueBtn),
  },
};

export { styles, comps };

export default theme;
