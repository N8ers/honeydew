import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import NavigationDrawer from "../components/NavigationDrawer/NavigationDrawer";

function Main() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <NavigationDrawer />

        <h1>I am home</h1>

        <Box m={3}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

export default Main;
