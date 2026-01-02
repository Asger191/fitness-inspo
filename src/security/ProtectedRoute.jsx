import { Navigate } from "react-router"
import facade from "../../apiFacade"

export default function ProtectedRoute({ role, children }) {
  if (!facade.loggedIn()) {
    alert("You're not logged in")
    return <Navigate to="/" replace />
  }

  if (role && !facade.hasUserAccess(role)) {
    alert("You don't have permission to access this site")
    return <Navigate to="/" replace />
  }

  return children
}
