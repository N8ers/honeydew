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
          backgroundColor: "#002f3c",
          color: "white",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <div className={styles.drawer}>
        <div>
          <img
            src="https://image.shutterstock.com/image-vector/melon-fruit-icon-color-isolated-600w-2166884767.jpg"
            alt="honeydew-icon"
            className={styles.icon}
          />
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
      </div>
    </Drawer>
  );
}
