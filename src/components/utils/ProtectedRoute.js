import { Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import PropTypes from "prop-types"

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0()

  if (!isLoading) {
    if (!isAuthenticated) {
      return <Navigate to="/" />
    }
    return children
  }
}

ProtectedRoute.propTypes = {
  children: PropTypes.object,
}

export default ProtectedRoute
