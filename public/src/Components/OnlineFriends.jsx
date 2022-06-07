import React from "react";

//mui imports
import { AvatarGroup, Avatar } from "@mui/material";

//customs imports
import { styles, comps } from "../styles/theme";

//component imports
import ImageItem from "./ImageItem";
import ConvoItem from "./ConvoItem";

//custom components
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
