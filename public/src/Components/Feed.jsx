import React, { useEffect, useContext } from "react";

//import services
import postService from "../services/posts";

//import context
import { PostContext } from "../App";

//mui imports
import { Box } from "@mui/material";

//mui icon imports
import {} from "@mui/icons-material";

//customs imports
import { styles } from "../styles/theme";

//component imports
import CardItem from "./CardItem";

const Feed = () => {
  const { posts, setPosts } = useContext(PostContext);

  useEffect(() => {
    const getPosts = async (e) => setPosts(await postService.getAll());
    getPosts();
  }, []);

  return (
    <Box flex={4} p={2} sx={styles.comps.feed}>
      {posts.map((post) => (
        <CardItem key={post._id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
