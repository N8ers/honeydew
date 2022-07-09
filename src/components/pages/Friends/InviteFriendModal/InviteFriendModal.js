import { useState } from "react"
import PropTypes from "prop-types"
import {
  Button,
  Backdrop,
  Card,
  TextField,
  Alert,
  IconButton,
} from "@mui/material"
import { Close } from "@mui/icons-material"

function InviteFriendModal(props) {
  const { isOpen, closeModal } = props

  const [invitationIsSent, setInvitationIsSent] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <Backdrop open={isOpen} sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Card sx={{ backgroundColor: "white", padding: 5, width: 500 }}>
        <IconButton
          aria-label="close"
          onClick={() => {
            setEmail("")
            closeModal()
            setInvitationIsSent(false)
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
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
  )
}

InviteFriendModal.propTypes = {
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
}

export default InviteFriendModal
