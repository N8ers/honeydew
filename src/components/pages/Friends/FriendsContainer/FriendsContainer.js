import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, TextField } from "@mui/material"

import FriendCard from "../FriendCard/FriendCard"
import { getFriends } from "../../../../store/actions"

function FriendsContainer() {
  const [friends, setFriends] = useState([])

  const friendDataFromState = useSelector((state) => state.friends)

  const dispatch = useDispatch()

  useEffect(() => {
    setFriends(friendDataFromState)
  }, [friendDataFromState])

  useEffect(() => {
    dispatch(getFriends())
  }, [])

  return (
    <div>
      <h1>Friends</h1>

      <form>
        <TextField
          id="standard-basic"
          label="Find A Friend"
          variant="standard"
        />
        <Button>+</Button>
      </form>

      {friends.map((friend) => (
        <FriendCard key={friend.id} username={friend.username} />
      ))}
    </div>
  )
}

export default FriendsContainer
