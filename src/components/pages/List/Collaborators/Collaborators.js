import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Button, Autocomplete, TextField, Backdrop, Card } from "@mui/material"
import PropTypes from "prop-types"

import { getFriends } from "../../../../store/actions"

function Collaborators(props) {
  const { invitedFriendsDataFromState } = props
  const dispatch = useDispatch()

  const friendDataFromState = useSelector((state) => state.friends)

  const [invitedFriends, setInvitedFriends] = useState([])
  const [modal, setModal] = useState(false)

  const handleGetListById = async () => {
    await dispatch(getFriends())
  }

  useEffect(() => {
    handleGetListById()
    setInvitedFriends(invitedFriendsDataFromState)
  }, [])

  const handleInvitedCollaboratorChange = (value) => {
    console.log("event ", value.target.value)
    setModal(true)
  }

  return (
    <div>
      <div>
        <h4>Collaborators</h4>
        <ul>
          {invitedFriends.map((friend) => (
            <li key={friend.id}>{friend.username}</li>
          ))}
        </ul>
      </div>

      <Autocomplete
        multiple
        id="tags-standard"
        options={friendDataFromState}
        getOptionLabel={(option) => option.username}
        defaultValue={[]}
        onChange={handleInvitedCollaboratorChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />

      <Backdrop open={modal}>
        <Card variant="outlined" sx={{ width: 500, margin: "0 auto" }}>
          <h1>hi</h1>
          <Button onClick={() => setModal(false)}>close</Button>
        </Card>
      </Backdrop>

      <hr />

      <Link to={"/friends"}>
        <Button>Invite a new collaborator!</Button>
      </Link>
    </div>
  )
}

Collaborators.propTypes = {
  invitedFriendsDataFromState: PropTypes.array,
}

Collaborators.defaultProps = {
  invitedFriendsDataFromState: [],
}

export default Collaborators
