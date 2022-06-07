import React, { useContext } from "react";

//mui imports
import { Box, List, Typography, ImageList } from "@mui/material";

//customs imports
import { styles } from "../styles/theme";

//component imports
import ImageItem from "./ImageItem";
import ConvoItem from "./ConvoItem";
import OnlineFriends from "./OnlineFriends";

//import json objects
import images from "../db/images.json";

//import context
import { PostContext } from "../App";

const Rightbar = () => {
  const { posts } = useContext(PostContext);

  const sidePosts = posts.slice(0, 3);

  return (
    <Box flex={2} p={5} sx={styles.display.rightBox}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={300}>
          Online Friends
        </Typography>

        <OnlineFriends />

        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Images
        </Typography>

        <ImageList sx={styles.comps.rightbar.imgList} cols={3} rowHeight={164}>
          {images.map((item, i) => (
            <ImageItem key={i} item={item} />
          ))}
        </ImageList>

        <Typography variant="h6" fontWeight={300} mt={2} mb={2}>
          Latest Posts
        </Typography>

        <List sx={styles.comps.rightbar.convoList}>
          {sidePosts.map((post, i) => (
            <ConvoItem
              key={i}
              name={post.user}
              title={post.title}
              body={post.body}
            />
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
