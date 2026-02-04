
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { Dynamicrouting } from './component/Dynamicrouting'
import { Locationref } from './component/Locationref'
import { Navigator } from './component/Navigator'

function App() {
  return (
    <div className="min-vh-100 app-shell">
      <header className="border-bottom bg-white">
        <div className="container py-3 d-flex align-items-center justify-content-between">
          <h1 className="h4 m-0">Dynamic Routing</h1>
          <span className="text-muted small">React Router + Bootstrap</span>
        </div>
      </header>

      <main className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="h5 card-title">Users</h2>
                <p className="card-text text-muted">
                  Select a user to see route params in action.
                </p>
                <div className="list-group">
                  <Link className="list-group-item list-group-item-action" to="/user/1">
                    User 1
                  </Link>
                  <Link className="list-group-item list-group-item-action" to="/user/2">
                    User 2
                  </Link>
                  <Link className="list-group-item list-group-item-action" to="/user/3">
                    User 3
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="card shadow-sm mb-4">
              <div className="card-body">
                <Routes>
                  <Route path="/user/:id" element={<Dynamicrouting />} />
                </Routes>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 align-items-center">
              <Navigator />
              <Locationref />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
