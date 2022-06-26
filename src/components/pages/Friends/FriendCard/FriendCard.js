import PropTypes from "prop-types"
import { Card, Button } from "@mui/material"

function FriendCard(props) {
  const { username } = props
  return (
    <Card>
      <h1>{username}</h1>

      <div>invited to collaborate on:</div>
      <ul>
        <li>
          list name 1 | <Button>Revoke access</Button>
        </li>
        <li>
          list name 2 | <Button>Revoke access</Button>
        </li>
      </ul>

      <Button>delete friend</Button>
    </Card>
  )
}

FriendCard.propTypes = {
  username: PropTypes.string,
}

export default FriendCard
