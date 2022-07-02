import { Backdrop, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react"

function LoadingSpinner() {
  const [loading, setLoading] = useState(true)
  const loadingFromState = useSelector((state) => state.loading)
  const { isLoading } = useAuth0()

  useEffect(() => {
    setLoading(loadingFromState)
  }, [loadingFromState])

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isLoading || loading}
    >
      <CircularProgress />
    </Backdrop>
  )
}

export default LoadingSpinner
