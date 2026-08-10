import { Link } from 'react-router-dom'

function Events() {
  return (
    <div className="events-page">

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

      <main className="events-content">

        <p className="features-label">
          CAMPUS EVENTS
        </p>

        <h1>
          Discover what's happening
          <span> around campus.</span>
        </h1>

        <p>
          Discover upcoming university events, activities,
          workshops and social gatherings.
        </p>

        <Link to="/" className="secondary-button">
          ← Back to Home
        </Link>

      </main>

    </div>
  )
}

export default Events