//mui imports
import { createTheme, Toolbar, Box, Badge, Modal } from "@mui/material";
import styled from "@emotion/styled";

//custom theme
const theme = createTheme({
  palette: {
    dark: {
      main: "#404040",
    },
  },
  components: {},
});

//custom styles object
const styles = {
  comps: {
    navbar: {
      toolbar: {
        display: "flex",
        justifyContent: "space-between",
      },
      icoCont: {
        display: "none",
        gap: "20px",
        alignItems: "center",
        //if the breakpoint is at small or larger (small or .up)
        [theme.breakpoints.up("sm")]: {
          display: "flex",
        },
      },
      avatar: {
        width: 30,
        height: 30,
      },
      userInfo: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        //if the breakpoint is at small or larger (small or .up)
        [theme.breakpoints.up("sm")]: {
          display: "none",
        },
      },
    },
    rightbar: {
      imgList: {
        gap: 5,
        rowHeight: 100,
      },
      convoList: {
        width: "100%",
        height: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
      },
      badge: {
        "& .MuiBadge-badge": {
          backgroundColor: "#44b700",
          color: "#44b700",
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
          },
        },
        "@keyframes ripple": {
          "0%": {
            transform: "scale(.8)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(2.4)",
            opacity: 0,
          },
        },
      },
    },
    add: {
      fab: {
        bottom: 20,
        left: {
          xs: "calc(50% - 25px)",
          md: 30,
        },
      },
      popup: {
        width: 500,
        height: 375,
        padding: 3,
        borderRadius: 5,
      },
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      userInfo: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBotton: "20px",
      },
      input: {
        width: "100%",
        marginTop: "20px",
      },
    },
    feed: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  display: {
    logoText: {
      color: "white",
      textDecoration: "none",
      display: { xs: "none", sm: "block" },
      "&:visited": {
        color: "white",
      },
    },
    logo: {
      display: { xs: "block", sm: "none" },
    },
    sideBox: {
      display: { xs: "none", sm: "block" },
    },
    rightBox: {
      display: { xs: "none", md: "flex" },
    },
    avGroup: {
      display: "flex",
      alignItems: "start",
      justifyContent: "start",
    },
  },
};
//custom components
const comps = {
  navbar: {
    toolbar: styled(Toolbar)(styles.comps.navbar.toolbar),
    icoCont: styled(Box)(styles.comps.navbar.icoCont),
    userInfo: styled(Box)(styles.comps.navbar.userInfo),
  },
  rightbar: {
    badge: styled(Badge)(styles.comps.rightbar.badge),
  },
  add: {
    modal: styled(Modal)(styles.comps.add.modal),
    userInfo: styled(Box)(styles.comps.add.userInfo),
  },
};

export { styles, comps };

export default theme;
