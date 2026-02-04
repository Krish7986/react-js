import { useParams } from "react-router-dom"


export function Dynamicrouting() {
  const { id } = useParams()

  return (
    <>
      <h2 className="h5 mb-2">User Details</h2>
      <p className="mb-2">
        Viewing user with id <span className="fw-semibold">{id}</span>.
      </p>
      <div className="alert alert-info mb-0" role="alert">
        This is a placeholder for user data from route params.
      </div>
    </>
  )
}
