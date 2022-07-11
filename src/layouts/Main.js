import { Outlet } from "react-router-dom"
import { Box } from "@mui/material"

import NavigationDrawer from "../components/navigation/NavigationDrawer/NavigationDrawer"

function Main() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <NavigationDrawer />

        <Box m={3}>
          <Outlet />
        </Box>
      </Box>
    </div>
  )
}

export default Main
