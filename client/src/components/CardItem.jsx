import React from "react";
import moment from "moment";
import {
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Avatar,
  Checkbox,
} from "@mui/material";
import { Favorite, Share } from "@mui/icons-material";

const CardItem = ({ post }) => {
  return (
    <Card sx={{ maxWidth: "100%", margin: "5px 15px" }}>
      <CardHeader
        avatar={<Avatar />}
        title={post.user}
        subheader={moment(post.date).format("MM/DD/YYYY hh:mma")}
      />
      <CardMedia
        component="img"
        image="https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            color="error"
            icon={<Favorite />}
            checkedIcon={<Favorite />}
          ></Checkbox>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardItem;
