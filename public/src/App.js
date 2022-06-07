import React, { useState, createContext, useMemo, useContext } from "react";

//mui imports
import {
  Box,
  Stack,
  createTheme,
  ThemeProvider,
  useTheme,
} from "@mui/material";

//component imports
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import Add from "./Components/Add";

export const PostContext = createContext({});
const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
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

  return (
    <ColorModeContext.Provider value={colorMode}>
      <PostContext.Provider value={{ posts, setPosts }}>
        <ThemeProvider theme={theme}>
          <Box bgcolor={"background.default"} color={"text.primary"}>
            <Navbar />
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Sidebar theme={useTheme()} toggle={colorMode.toggleColorMode} />
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

export default App;
