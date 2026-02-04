import "bootstrap/dist/css/bootstrap.min.css"
import { Link, Route, Routes, } from "react-router-dom"
import { Home } from "./component/Home"
import { About } from "./component/About"

function App() {
  return (
    <>

    <Link to="/">Home</Link> | <Link to="/About">About</Link>

    <Routes >
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />} />
    </Routes>

    </>
    
  )
}

export default App
