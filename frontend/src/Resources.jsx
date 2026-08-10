import { Link } from 'react-router-dom'

function Resources() {
  return (
    <div className="resources-page">

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

      <main className="resources-content">

        <p className="features-label">
          STUDY RESOURCES
        </p>

        <h1>
          Everything you need
          <span> to succeed.</span>
        </h1>

        <p>
          Access useful academic resources, study materials
          and tools to help you stay organised and make the
          most of your studies.
        </p>

        <Link to="/" className="secondary-button">
          ← Back to Home
        </Link>

      </main>

    </div>
  )
}

export default Resources