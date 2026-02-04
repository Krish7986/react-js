import { useLocation } from "react-router-dom"


export function Locationref() {
  const location = useLocation()

  return (
    <span className="badge text-bg-light border">
      Current path: <span className="text-muted">{location.pathname}</span>
    </span>
  )
}
