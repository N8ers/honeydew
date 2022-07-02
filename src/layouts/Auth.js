import { Link } from "react-router-dom"
import { Box, Button, Card } from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react"

function Auth() {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ width: 500, margin: "50px auto", padding: "50px" }}
      >
        <h1>I'm Auth</h1>
        <p>Pretty much the landing page if you're not signed in, i guess.</p>

        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Sign in
        </Button>

        <Button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </Button>

        <br />
        <br />
        <hr />
        <Link to={"/lists"}>
          <Button>HACK - Go Home</Button>
        </Link>
      </Card>

      {isAuthenticated && (
        <Card
          variant="outlined"
          sx={{ width: 500, margin: "50px auto", padding: "50px" }}
        >
          <div>isAuthenticated: {isAuthenticated.toString()}</div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </Card>
      )}
    </Box>
  )
}

export default Auth
