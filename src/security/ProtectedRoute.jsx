import { Navgate } from "react-router"
import facade from "../apiFacade"

export default function ProtectedRoute({ role, children }) {
  if (!facade.loggedIn()) {
    return <Navigate to="/" replace />
  }

  if (role && !facade.hasUserAccess(role)) {
    return <Navigate to="/" replace />
  }

  return children
}
