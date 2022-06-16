import { NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

function NavigationItem(props) {
  return (
    <NavLink
      exact={props.to}
      to={props.to}
      style={({ isActive }) => ({
        color: isActive ? "teal" : "white",
        textDecoration: "none",
      })}
    >
      <ListItem key={props.to} disablePadding>
        <ListItemButton>
          <ListItemIcon style={{ color: "#1ea5a3" }}>
            {/* <ListItemIcon style={{ color: "white" }}> */}
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={props.title} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
}

export default NavigationItem;
