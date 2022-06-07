import { React, useState } from "react";

//mui imports
import {
  AppBar,
  Typography,
  Button,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";

//mui icon imports
import { Facebook, Mail, Notifications } from "@mui/icons-material";

//customs imports
import { styles, comps } from "../styles/theme";

//custom components
const CToolbar = comps.navbar.toolbar;
const CIcoCont = comps.navbar.icoCont;
const CUserInfo = comps.navbar.userInfo;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pages = ["Friends", "Messenger", "Profile", "Settings"];

  return (
    <AppBar position="sticky">
      <CToolbar>
        <Typography
          component="a"
          href="/#home"
          variant="h6"
          sx={styles.display.logoText}
        >
          Fakebook
        </Typography>
        <Facebook sx={styles.display.logo} />

        <Box sx={styles.display.rightBox}>
          {pages.map((page, i) => (
            <Button
              href="#page"
              key={i}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              {page}
            </Button>
          ))}
        </Box>

        <CIcoCont>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>

          <IconButton onClick={() => setOpen(true)}>
            <Avatar sx={styles.comps.avatar} />
          </IconButton>
        </CIcoCont>

        <CUserInfo>
          <IconButton onClick={() => setOpen(true)}>
            <Avatar sx={styles.comps.avatar} />
          </IconButton>

          <Typography variant="span">User</Typography>
        </CUserInfo>
      </CToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={null}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
