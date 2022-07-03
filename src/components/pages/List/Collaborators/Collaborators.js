import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Button, Autocomplete, TextField } from "@mui/material"

import { getFriends } from "../../../../store/actions"

function Collaborators() {
  const dispatch = useDispatch()
  const listDataFromState = useSelector((state) => state.selectedList)
  const friendDataFromState = useSelector((state) => state.friends)

  const [invitedFriends, setInvitedFriends] = useState([])

  const handleGetListById = async () => {
    await dispatch(getFriends())
  }

  useEffect(() => {
    handleGetListById()
  }, [])

  useEffect(() => {
    setInvitedFriends(listDataFromState.invitedFriends)
  }, [listDataFromState])

  const handleInvitedCollaboratorChange = (value) => {
    console.log("event ", value.target.value)
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

      <hr />

      <Link to={"/friends"}>
        <Button>Invite a new collaborator!</Button>
      </Link>
    </div>
  )
}

export default Collaborators
