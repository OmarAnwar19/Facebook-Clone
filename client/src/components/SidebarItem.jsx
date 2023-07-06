import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
} from "@mui/material";

const SidebarItem = ({ href = null, text, icon, oc = null }) => {
  return (
    <ListItem onClick={oc}>
      <ListItemButton component="a" href={href}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
