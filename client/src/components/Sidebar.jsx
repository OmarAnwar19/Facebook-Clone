import React from "react";
import { Box, List, Switch } from "@mui/material";
import {
  Home,
  Storefront,
  Brightness7,
  Brightness4,
  OndemandVideo,
  Groups,
  Tour,
  Pages,
} from "@mui/icons-material";
import { styles } from "../styles/theme";
import SidebarItem from "./SidebarItem";

const Sidebar = ({ theme, toggle }) => {
  return (
    <Box flex={2} p={2} sx={styles.display.sideBox}>
      <Box position="fixed">
        <List>
          <SidebarItem href={"#home"} icon={<Home />} text="Home" />
          <SidebarItem href={"#market"} icon={<Storefront />} text="Market" />
          <SidebarItem href={"#watch"} icon={<OndemandVideo />} text="Watch" />
          <SidebarItem href={"#groups"} icon={<Groups />} text="Groups" />
          <SidebarItem href={"#pages"} icon={<Pages />} text="Pages" />
          <SidebarItem href={"#events"} icon={<Tour />} text="Events" />

          <SidebarItem
            // icon={
            //   theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />
            // }
            icon={<Brightness4 />}
            text={<Switch color="dark" />}
            oc={toggle}
          />
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
