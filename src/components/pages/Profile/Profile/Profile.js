import { Card, Box } from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react"

function Profile() {
  const { user } = useAuth0()

  return (
    <Box>
      {user && (
        <Card
          variant="outlined"
          sx={{ width: 500, margin: "50px auto", padding: "50px" }}
        >
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <h2>{user.nickname}</h2>
          <p>{user.email}</p>
          <p>{user.sub}</p>
        </Card>
      )}
    </Box>
  )
}

export default Profile
