import { Card, Box } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function Profile() {
  const userFromState = useSelector((state) => state.user)

  const [user, setUser] = useState(true)

  useEffect(() => {
    setUser(userFromState)
  }, [userFromState])

  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ width: 500, margin: "50px auto", padding: "50px" }}
      >
        <h1>i will be user data</h1>
        <div>{user.email}</div>
        <div>{user.emailVerified}</div>
        <div>{user.uid}</div>
      </Card>
    </Box>
  )
}

export default Profile
