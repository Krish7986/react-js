import { useNavigate } from "react-router-dom"

export function Navigator() {
  const navigate = useNavigate()

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          navigate("/")
        }}
      >
        Home
      </button>
      <button
        type="button"
        className="btn btn-outline-info"
        onClick={() => {
          navigate(-1)
        }}
      >
        Go Back
      </button>
    </>
  )
}
