import * as React from "react"
import { Drawer, Divider, Box } from "@mui/material"
import { Link } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Logout from "@mui/icons-material/Logout"

import DrawerItem from "../DrawerItem/DrawerItem"

import styles from "./NavigationDrawer.module.css"

const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = useAuth0()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#002f3c",
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div className={styles.drawer}>
        <Link
          to={"/"}
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          <img
            src="https://image.shutterstock.com/image-vector/melon-fruit-icon-color-isolated-600w-2166884767.jpg"
            alt="honeydew-icon"
            className={styles.icon}
          />
          <h1 className={styles.title}>honeydew</h1>
        </Link>

        <Divider sx={{ bgcolor: "white" }} />

        <DrawerItem to="/lists" title="lists" />
        <DrawerItem to="/friends" title="friends" />
        <DrawerItem to="/profile" title="profile" />

        <Divider sx={{ bgcolor: "white" }} />

        <Box
          sx={{
            display: "flex",
            ":hover": { backgroundColor: "red", cursor: "pointer" },
          }}
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          <Logout
            style={{
              marginLeft: 18,
              marginTop: 8,
            }}
          />
          <div
            style={{
              fontWeight: "bold",
              marginLeft: "30px",
              marginTop: "10px",
              marginBottom: "12px",
            }}
          >
            logout
          </div>
        </Box>
      </div>
    </Drawer>
  )
}
