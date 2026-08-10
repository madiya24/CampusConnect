import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">

        <img
          src="/logo.png"
          alt="CampusConnect Logo"
          className="nav-logo"
        />

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button className="login-button">Login</button>
        </div>

      </nav>

      <main>

        {/* Hero */}
        <section className="hero" id="home">
          <div className="hero-content">

            <p className="welcome-text">
              WELCOME TO CAMPUSCONNECT
            </p>

            <h1>
              Your campus life,
              <span> connected.</span>
            </h1>

            <p className="hero-description">
              A digital platform designed to help students discover
              campus events, access resources, stay informed and connect
              with their university community.
            </p>

            <div className="hero-buttons">
              <button className="primary-button">
                Get Started
              </button>

              <button className="secondary-button">
                Learn More
              </button>
            </div>

          </div>
        </section>

        {/* Features */}
        <section className="features" id="features">

          <div className="section-heading">
            <p>WHAT CAMPUSCONNECT OFFERS</p>
            <h2>Everything students need in one place.</h2>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <h3>📅 Campus Events</h3>
              <p>
                Discover upcoming university events and activities.
              </p>
            </div>

            <div className="feature-card">
              <h3>📢 Announcements</h3>
              <p>
                Stay updated with important campus announcements.
              </p>
            </div>

            <div className="feature-card">
              <h3>📚 Study Resources</h3>
              <p>
                Access useful academic resources and study materials.
              </p>
            </div>

            <div className="feature-card">
              <h3>🤝 Student Community</h3>
              <p>
                Connect with other students and participate in campus life.
              </p>
            </div>

          </div>

        </section>

      </main>

    </div>
  )
}

export default App