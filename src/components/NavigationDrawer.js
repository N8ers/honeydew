import * as React from "react";
import { Drawer, Divider } from "@mui/material";

import DrawerItem from "./DrawerItem";

import styles from "./NavigationDrawer.module.css";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div>
        <h1 className={styles.title}>honeydew</h1>
      </div>
      <Divider />

      <DrawerItem to="/" title="home" />
      <DrawerItem to="/lists" title="lists" />
      <DrawerItem to="/lists/2" title="lists/2" />

      <Divider />

      <DrawerItem to="/counter" title="counter" />
      <DrawerItem to="/details/2" title="/details/2" />

      <Divider />

      <DrawerItem to="/" title="logout" />
    </Drawer>
  );
}
