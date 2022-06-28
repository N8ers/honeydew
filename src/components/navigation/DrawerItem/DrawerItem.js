import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import InboxIcon from "@mui/icons-material/MoveToInbox"

function NavigationItem(props) {
  const { to, title } = props

  return (
    <NavLink
      exact={to}
      to={to}
      style={({ isActive }) => ({
        color: isActive ? "#1ea5a3" : "white",
        textDecoration: "none",
        fontWeight: "bold",
      })}
    >
      <ListItem key={to} disablePadding>
        <ListItemButton>
          <ListItemIcon style={{ color: "#1ea5a3" }}>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography type="body2" style={{ fontWeight: "bold" }}>
                {title}
              </Typography>
            }
          />
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
