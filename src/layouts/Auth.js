import { Link } from "react-router-dom"
import { Box, Button, Card } from "@mui/material"
import { useAuth0 } from "@auth0/auth0-react"

function Auth() {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ width: 500, margin: "50px auto", padding: "50px" }}
      >
        <h1>I'm Auth</h1>
        <p>Pretty much the landing page if you're not signed in, i guess.</p>

        <Button
          variant="contained"
          onClick={() => loginWithRedirect("http://localhost:3000/lists")}
        >
          Sign in
        </Button>

        {isAuthenticated && (
          <div>
            <br />
            <br />
            <hr />
            <Link to={"/lists"}>
              <Button>HACK - Go Home</Button>
            </Link>
          </div>
        )}
      </Card>
    </Box>
  )
}

export default Auth
