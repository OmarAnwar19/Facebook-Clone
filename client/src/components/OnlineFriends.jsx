import React from "react";
import { AvatarGroup, Avatar } from "@mui/material";
import { styles, comps } from "../styles/theme";
const CBadge = comps.rightbar.badge;

const OnlineFriends = () => {
  return (
    <AvatarGroup sx={styles.display.avGroup} total={8}>
      <CBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar />
      </CBadge>

      <CBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar />
      </CBadge>

      <CBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar />
      </CBadge>

      <CBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar />
      </CBadge>
    </AvatarGroup>
  );
};

export default OnlineFriends;
