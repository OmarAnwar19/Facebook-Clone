import React from "react";

//mui imports
import {
  Typography,
  ListItem,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";

const ConvoItem = ({ name, title, body }) => {
  return (
    <Box>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              {name}
              <br />

              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {body}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </Box>
  );
};

export default ConvoItem;
