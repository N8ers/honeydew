import { Link } from "react-router-dom"
import { useState } from "react"
import { Box, Button, Card, TextField } from "@mui/material"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth"

function AuthForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const auth = getAuth()

  const login = (event) => {
    event.preventDefault()
    console.log("login fired: ", email, password)
    try {
      signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log("ERROR")
    }
  }

  const signup = async (event) => {
    event.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      console.log(userCredential)
    } catch (error) {
      console.log("ERROR ", error)
    }
  }

  const logout = async () => {
    console.log("LOG OUT!")
    try {
      signOut(auth)
    } catch (error) {
      console.log("ERROR ", error)
    }
  }

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ width: 500, margin: "50px auto", padding: "50px" }}
      >
        <h1>I'm Auth</h1>
        <p>Pretty much the landing page if you're not signed in, i guess.</p>
        <div>email: {email}</div>
        <div>password: {password}</div>

        <form onSubmit={login}>
          <TextField
            label="Email"
            variant="standard"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="contained" type="submit">
            Sign in
          </Button>
        </form>

        <hr />

        <form onSubmit={signup}>
          <TextField
            label="Email"
            variant="standard"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            label="Password"
            variant="standard"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button variant="contained" type="submit">
            Create account
          </Button>
        </form>

        <div>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </div>

        <br />
        <br />
        <br />

        <div>
          <br />
          <br />
          <Link to={"/lists"}>
            <Button>Go to the app!</Button>
          </Link>
        </div>
      </Card>
    </Box>
  )
}

export default AuthForm
