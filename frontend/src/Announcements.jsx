import { Link } from 'react-router-dom'

function Announcements() {
  return (
    <div className="announcements-page">

      <nav className="navbar">

        <img
          src="/logo.png"
          alt="CampusConnect Logo"
          className="nav-logo"
        />

        <div className="nav-links">

          <Link to="/">
            Home
          </Link>

          <Link to="/features">
            Features
          </Link>

        </div>

      </nav>

      <main className="announcements-content">

        <p className="features-label">
          CAMPUS ANNOUNCEMENTS
        </p>

        <h1>
          Stay informed,
          <span> stay connected.</span>
        </h1>

        <p>
          Keep up with important university announcements,
          notices and updates so you never miss what's happening
          on campus.
        </p>

        <Link to="/" className="secondary-button">
          ← Back to Home
        </Link>

      </main>

    </div>
  )
}

export default Announcements