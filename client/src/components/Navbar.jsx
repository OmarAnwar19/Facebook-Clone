import { React, useState } from "react";
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
import { Facebook, Mail, Notifications } from "@mui/icons-material";
import { styles, comps } from "../styles/theme";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../services/auth/authSlice";

const CToolbar = comps.navbar.toolbar;
const CIcoCont = comps.navbar.icoCont;
const CUserInfo = comps.navbar.userInfo;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

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
        <MenuItem>
          {user ? (
            <li>
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <FaUser /> Register
                </Link>
              </li>
            </>
          )}
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
