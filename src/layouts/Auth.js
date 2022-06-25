import { Link } from "react-router-dom"
import { Box, Button, Card, TextField } from "@mui/material"

function Auth() {
  const login = (event) => {
    event.preventDefault()
    alert("loggin in!")
  }

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ width: 500, margin: "50px auto", padding: "50px" }}
      >
        <h1>I'm Auth</h1>
        <p>Pretty much the landing page if you're not signed in, i guess.</p>

        <form onSubmit={login}>
          <div>
            <TextField id="standard-basic" label="email" variant="standard" />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="password"
              variant="standard"
            />
          </div>
          <Button type="submit" variant="contained">
            Sign in
          </Button>
        </form>

        <br />
        <br />
        <Link to={"/lists"}>
          <Button>Go Home</Button>
        </Link>
      </Card>
    </Box>
  )
}

export default Auth
