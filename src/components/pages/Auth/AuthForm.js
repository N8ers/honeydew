import { Link } from "react-router-dom"
import { useState } from "react"
import { Box, Button, Card, TextField, FormControl } from "@mui/material"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth"

function AuthForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showCreateAccount, setShowCreateAccount] = useState(false)

  const auth = getAuth()

  const submitAuthForm = (event) => {
    event.preventDefault()

    if (setShowCreateAccount) {
      login()
    } else {
      signup()
    }
  }

  const login = () => {
    try {
      signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log("ERROR")
    }
  }

  const signup = async () => {
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

        <form onSubmit={submitAuthForm}>
          <FormControl>
            <TextField
              sx={{ display: "block" }}
              label="Email"
              variant="standard"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              sx={{ display: "block" }}
              label="Password"
              variant="standard"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" type="submit">
              {showCreateAccount ? "Create account" : "Login"}
            </Button>
          </FormControl>
        </form>

        <br />

        <div>
          <Button
            variant="outlined"
            onClick={() =>
              setShowCreateAccount((previousState) => !previousState)
            }
          >
            {showCreateAccount
              ? "Already have an account?"
              : "Create an account"}
          </Button>
        </div>

        <br />
        <hr />
        <br />

        <div>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </div>

        <div>
          <Link to={"/lists"}>
            <Button>Go to the app!</Button>
          </Link>
        </div>
      </Card>
    </Box>
  )
}

export default AuthForm
