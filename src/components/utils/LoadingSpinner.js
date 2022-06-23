import { Backdrop, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

function LoadingSpinner() {
  const [loading, setLoading] = useState(true)
  const loadingFromState = useSelector((state) => state.loading)

  useEffect(() => {
    setLoading(loadingFromState)
  }, [loadingFromState])

  return (
    <Backdrop
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading}
    >
      <CircularProgress />
    </Backdrop>
  )
}

export default LoadingSpinner
