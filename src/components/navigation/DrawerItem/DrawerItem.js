import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import InboxIcon from "@mui/icons-material/MoveToInbox"

function NavigationItem(props) {
  const { to, title } = props

  return (
    <NavLink
      exact={to}
      to={to}
      style={({ isActive }) => ({
        color: isActive ? "teal" : "white",
        textDecoration: "none",
      })}
    >
      <ListItem key={to} disablePadding>
        <ListItemButton>
          <ListItemIcon style={{ color: "#1ea5a3" }}>
            {/* <ListItemIcon style={{ color: "white" }}> */}
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </NavLink>
  )
}

NavigationItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
}

export default NavigationItem
