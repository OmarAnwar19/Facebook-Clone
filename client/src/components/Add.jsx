import React, { useContext, useState } from "react";
import postService from "../services/features/posts";
import { PostContext } from "../pages/Dashboard";
import {
  Box,
  Tooltip,
  Fab,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { styles, comps } from "../styles/theme";
import { useSelector } from "react-redux";
const CModal = comps.add.modal;

const Add = () => {
  const [open, setOpen] = useState(false);
  const { setPosts } = useContext(PostContext);
  const { user } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postService.create({
      user: e.target.user.value,
      title: e.target.title.value,
      body: e.target.body.value,
    });
    setPosts(await postService.getAll());

    setOpen(false);
  };

  return (
    <Box position="fixed" sx={styles.comps.add.fab}>
      <Tooltip onClick={(e) => setOpen(true)} title="Add Post">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <CModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="add-post"
      >
        <Box
          sx={styles.comps.add.popup}
          bgcolor={"background.default"}
          color={"text.primary"}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Add Post
          </Typography>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <Avatar sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="standard-multiline-static"
                sx={styles.comps.add.input}
                name="user"
                placeholder="User"
                variant="standard"
              />
            </Box>

            <TextField
              required
              id="standard-multiline-static"
              sx={styles.comps.add.input}
              name="title"
              placeholder="Post title..."
              variant="standard"
            />

            <TextField
              required
              id="standard-multiline-static"
              sx={styles.comps.add.input}
              multiline
              rows={4}
              name="body"
              placeholder="Post body..."
              variant="standard"
            />

            <Stack direction="row" gap={1} mt={2} mb={3}>
              <EmojiEmotions color="primary" />
              <Image color="secondary" />
              <VideoCameraBack color="success" />
              <PersonAdd color="error" />
            </Stack>

            <ButtonGroup fullWidth variant="contained">
              <Button type="submit">Post</Button>
              <Button type="submit" sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </form>
        </Box>
      </CModal>
    </Box>
  );
};

export default Add;
