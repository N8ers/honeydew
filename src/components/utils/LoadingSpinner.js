import { Backdrop, CircularProgress } from "@mui/material"
import { useEffect, useState } from "react"

function LoadingSpinner() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

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
