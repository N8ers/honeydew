import { Link, Outlet } from "react-router-dom";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";

function NavigationItem(props) {
  return (
    <Link to={props.to} style={{ textDecoration: "none", color: "black" }}>
      <ListItem key={props.to} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={props.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}

export default NavigationItem;
