import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Button, Autocomplete, TextField, Backdrop, Card } from "@mui/material"
import PropTypes from "prop-types"

import { getFriends, updateInvitedFriends } from "../../../../store/actions"

function Collaborators(props) {
  const { listId, invitedFriendsDataFromState } = props
  const dispatch = useDispatch()

  const friendDataFromState = useSelector((state) => state.friends)

  const [modal, setModal] = useState(false)
  const [selectedCollaborators, setSelectedCollaborators] = useState(
    invitedFriendsDataFromState
  )

  const saveCollaborators = () => {
    dispatch(updateInvitedFriends({ selectedCollaborators, listId }))
    setModal(false)
  }

  const handleGetListById = () => {
    dispatch(getFriends())
  }

  useEffect(() => {
    handleGetListById()
  }, [])

  useEffect(() => {
    setSelectedCollaborators(invitedFriendsDataFromState)
  }, [invitedFriendsDataFromState])

  return (
    <div>
      <div>
        <h4>Collaborators</h4>
        <ul>
          {invitedFriendsDataFromState.map((friend) => (
            <li key={friend.id}>{friend.username}</li>
          ))}
        </ul>
      </div>

      <Button onClick={() => setModal(true)}>manage collaborators</Button>

      <Backdrop open={modal}>
        <Card variant="outlined" sx={{ width: 500, padding: 5 }}>
          <Autocomplete
            multiple
            options={friendDataFromState}
            filterSelectedOptions
            getOptionLabel={(option) => option.username}
            value={selectedCollaborators}
            defaultValue={[invitedFriendsDataFromState]}
            onChange={(_, newValue) => setSelectedCollaborators(newValue)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Multiple values"
                placeholder="Favorites"
              />
            )}
          />

          <Button onClick={() => saveCollaborators()}>save</Button>
          <Button onClick={() => setModal(false)}>cancel</Button>
          <Link to={"/friends"}>
            <Button>Invite a new collaborator!</Button>
          </Link>
        </Card>
      </Backdrop>
    </div>
  )
}

Collaborators.propTypes = {
  invitedFriendsDataFromState: PropTypes.array,
  listId: PropTypes.number,
}

Collaborators.defaultProps = {
  invitedFriendsDataFromState: [],
}

export default Collaborators
