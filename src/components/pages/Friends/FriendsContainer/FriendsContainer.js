import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Backdrop, Card } from "@mui/material"

import FriendCard from "../FriendCard/FriendCard"
import { getFriends } from "../../../../store/actions"

function FriendsContainer() {
  const [friends, setFriends] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const friendDataFromState = useSelector((state) => state.friends)

  const dispatch = useDispatch()

  useEffect(() => {
    setFriends(friendDataFromState)
    console.log(friendDataFromState)
  }, [friendDataFromState])

  useEffect(() => {
    dispatch(getFriends())
  }, [])

  return (
    <div>
      <h1>Friends</h1>

      <Backdrop open={isOpen}>
        <Card sx={{ backgroundColor: "white", padding: 5 }}>
          <h1>hello there</h1>
          <Button variant="contained" onClick={() => setIsOpen(false)}>
            close
          </Button>
        </Card>
      </Backdrop>

      <Button onClick={() => setIsOpen(true)}>
        Invite someone to collaborate!
      </Button>

      {friends.map((friend) => (
        <FriendCard
          key={friend.id}
          username={friend.username}
          listAccess={friend.listAccess}
        />
      ))}
    </div>
  )
}

export default FriendsContainer
