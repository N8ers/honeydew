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

  const [modal, setModal] = useState(false)
  const [value, setValue] = useState(invitedFriendsDataFromState)

  const handleGetListById = () => {
    dispatch(getFriends())
  }

  useEffect(() => {
    handleGetListById()
  }, [])

  useEffect(() => {
    setValue(invitedFriendsDataFromState)
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
          <div>
            <h4>Collaborators</h4>
            <ul>
              {invitedFriendsDataFromState.map((friend) => (
                <li key={friend.id}>{friend.username}</li>
              ))}
            </ul>
          </div>

          <div>
            <div>'value' state: {JSON.stringify(value)}</div>
            <br />
            <div>'options': {JSON.stringify(friendDataFromState)}</div>
          </div>
          <br />
          <br />

          <Autocomplete
            multiple
            options={friendDataFromState}
            filterSelectedOptions
            getOptionLabel={(option) => option.username}
            value={value}
            defaultValue={[invitedFriendsDataFromState]}
            onChange={(_, newValue) => setValue(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Multiple values"
                placeholder="Favorites"
              />
            )}
          />

          <br />
          <br />
          <Button onClick={() => setModal(false)}>save</Button>
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
}

Collaborators.defaultProps = {
  invitedFriendsDataFromState: [],
}

export default Collaborators
