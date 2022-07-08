import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  Button,
  Backdrop,
  Card,
  TextField,
  Alert,
  IconButton,
} from "@mui/material"
import { Close } from "@mui/icons-material"

import FriendCard from "../FriendCard/FriendCard"
import { getFriends } from "../../../../store/actions"

function FriendsContainer() {
  const [friends, setFriends] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [invitationIsSent, setInvitationIsSent] = useState(false)

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

      <Backdrop
        open={isOpen}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        {/* break me out into my own component */}
        <Card sx={{ backgroundColor: "white", padding: 5, width: 500 }}>
          <IconButton
            aria-label="close"
            onClick={() => {
              setInvitationIsSent(false)
              setIsOpen(false)
            }}
            sx={{ float: "right" }}
          >
            <Close />
          </IconButton>

          <h1>Invite a friend!</h1>
          <p>
            We care about privacy and won't spam anyone! If they aren't a member
            of HoneyDew, ask them to join first. :)
          </p>
          <div>
            <div>Find a friend via email: </div>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              size="small"
              sx={{ marginTop: 1 }}
            />
            <Button
              variant="contained"
              onClick={() => setInvitationIsSent(true)}
              sx={{ marginLeft: 3, marginTop: 1 }}
            >
              invite!
            </Button>
          </div>
          {invitationIsSent && (
            <Alert severity="success" sx={{ marginTop: 2 }}>
              This is a success alert — check it out!
            </Alert>
          )}
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
