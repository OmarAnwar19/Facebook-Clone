import React, { useState, createContext, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../services/features/postSlice";
import {
  Box,
  Stack,
  createTheme,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Add from "../components/Add";
import Spinner from "../components/Spinner";

export const PostContext = createContext({});
const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, message } = useSelector((state) => state.posts);

  const [mode, setMode] = useState("light");
  const [posts, setPosts] = useState([]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          dark: {
            main: "#404040",
          },
        },
      }),
    [mode]
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <PostContext.Provider value={{ posts, setPosts }}>
        <ThemeProvider theme={theme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Sidebar theme={useTheme} toggle={colorMode.toggleColorMode} />
              <Feed />
              <Rightbar />
            </Stack>
            <Add />
          </Box>
        </ThemeProvider>
      </PostContext.Provider>
    </ColorModeContext.Provider>
  );
};

export default Dashboard;
