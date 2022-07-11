import PropTypes from "prop-types"
import { Card, Button, IconButton, Tooltip } from "@mui/material"
import { RemoveCircleOutlineSharp } from "@mui/icons-material"

function FriendCard(props) {
  const { username, listAccess } = props

  return (
    <Card sx={{ margin: 5, padding: 2 }}>
      <div>{username}</div>

      <hr />

      <div>invited to collaborate on:</div>
      <ul>
        {listAccess.map((list) => {
          return (
            <li key={list.id}>
              {list.title}
              <Tooltip title="revoke access">
                <IconButton color="primary" aria-label="Revoke Access">
                  <RemoveCircleOutlineSharp />
                </IconButton>
              </Tooltip>
            </li>
          )
        })}
      </ul>

      <Button>delete friend</Button>
    </Card>
  )
}

FriendCard.propTypes = {
  username: PropTypes.string,
  listAccess: PropTypes.array,
}

export default FriendCard
