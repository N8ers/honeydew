import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button } from "@mui/material"

import FriendCard from "../FriendCard/FriendCard"
import InviteFriendModal from "../InviteFriendModal/InviteFriendModal"

import { getFriends } from "../../../../store/actions"

function FriendsContainer() {
  const [friends, setFriends] = useState([])
  const [isOpen, setIsOpen] = useState(false)

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

      <InviteFriendModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />

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
