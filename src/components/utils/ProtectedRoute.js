import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"

function ProtectedRoute({ children }) {
  const loadingFromState = useSelector((state) => state.loading)
  const userFromState = useSelector((state) => state.user)

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(true)

  useEffect(() => {
    setLoading(loadingFromState)
    setUser(userFromState)
  }, [loadingFromState, userFromState])

  if (!loading) {
    if (!user?.email || !user?.uid) {
      return <Navigate to="/" />
    }
    return children
  }
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
}

export default ProtectedRoute
