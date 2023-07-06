import React, { useEffect, useContext } from "react";
import postService from "../services/features/posts";
import { PostContext } from "../pages/Dashboard";
import { Box } from "@mui/material";
import { styles } from "../styles/theme";
import CardItem from "./CardItem";

const Feed = () => {
  const { posts, setPosts } = useContext(PostContext);

  useEffect(() => {
    const getPosts = async (e) => setPosts(await postService.getAll());
    getPosts();
  }, [setPosts]);

  return (
    <Box flex={4} p={2} sx={styles.comps.feed}>
      {posts.map((post) => (
        <CardItem key={post._id} post={post} />
      ))}
    </Box>
  );
};

export default Feed;
