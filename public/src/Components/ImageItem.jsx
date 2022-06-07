import React from "react";

//mui imports
import { ImageListItem } from "@mui/material";

const ImageItem = ({ item }) => {
  return (
    <ImageListItem>
      <img src={item.src} alt={item.title} />
    </ImageListItem>
  );
};

export default ImageItem;
