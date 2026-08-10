import { useState } from 'react'
import './App.css'

function App() {
  const [showLogin, setShowLogin] = useState(false)
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
          <button
              className="login-button"
              onClick={() => setShowLogin(true)}
            >
              Login
          </button>
        </div>

      </nav>

    <main>

      {/* Hero */}
      <section className="hero" id="home">

      <div className="hero-content">

        <div className="hero-badge">
          🎓 WELCOME TO CAMPUSCONNECT
        </div>

        <h1>
          Your campus life,
          <span>connected.</span>
        </h1>

        <p className="hero-description">
          A digital platform designed to help students discover
          campus events, access resources, stay informed and connect
          with their university community.
        </p>

        <div className="hero-buttons">

        <button
            className="primary-button"
            onClick={() => setShowLogin(true)}
          >
            Get Started
            <span>→</span>
        </button>

          <button className="secondary-button">
            Learn More
            <span>→</span>
          </button>

        </div>

        <div className="hero-community">
          <div className="community-circles">
            <span>👩🏽</span>
            <span>👨🏾</span>
            <span>👩🏼</span>
            <span>👨🏻</span>
          </div>

          <p>
            Join a growing community<br />
            of <strong>students</strong>
          </p>
        </div>

      </div>


      <div className="hero-visual">

        <div className="hero-image-container">

          <img
            src="/hero-student.png"
            alt="Student using CampusConnect"
            className="hero-image"
          />

        </div>


        <div className="floating-card events-card">
          <div className="floating-icon">📅</div>
          <div>
            <strong>Upcoming Events</strong>
            <small>5 events this week</small>
          </div>
          <span>→</span>
        </div>


        <div className="floating-card resources-card">
          <div className="floating-icon">📚</div>
          <div>
            <strong>New Resources</strong>
            <small>Study materials</small>
          </div>
          <span>→</span>
        </div>


        <div className="floating-card updates-card">
          <div className="floating-icon">🔔</div>
          <div>
            <strong>Stay Informed</strong>
            <small>Latest announcements</small>
          </div>
          <span>→</span>
        </div>

      </div>

     </section>

    {/* Features */}
      <div className="feature-grid" id="features">

      <div className="feature-card">
                <div className="feature-image">
                  <img src="/events.png" alt="Campus Events" />
                </div>

                <h3>Campus Events</h3>
                <p>
                  Discover upcoming university events and activities.
                </p>
          </div>

          <div className="feature-card">
                <div className="feature-image">
                  <img src="/announcements.png" alt="Announcements" />
                </div>

                <h3>Announcements</h3>
                <p>
                  Stay updated with important campus announcements.
                </p>
          </div>

          <div className="feature-card">
                <div className="feature-image">
                  <img src="/resources.png" alt="Study Resources" />
                </div>

                <h3>Study Resources</h3>
                <p>
                  Access useful academic resources and study materials.
                </p>
          </div>

          <div className="feature-card">
                <div className="feature-image">
                  <img src="/community.png" alt="Student Community" />
                </div>

                <h3>Student Community</h3>
                <p>
                  Connect with other students and participate in campus life.
                </p>
          </div>

  </div>
      {/* about */}
  <section className="about" id="about">

  <div className="about-content">

    <div className="about-text">

      <p className="about-label">
        ABOUT CAMPUSCONNECT
      </p>

      <h2>
        Making campus life
        <span> simpler and connected.</span>
      </h2>

      <p>
        CampusConnect is a digital platform created to make it easier
        for students to stay connected with their university community.
      </p>

      <p>
        From discovering campus events and accessing study resources
        to keeping up with important announcements, CampusConnect
        brings essential student information together in one place.
      </p>

      <button
          className="primary-button"
          onClick={() => setShowLogin(true)}
        >
          Get Started
          <span>→</span>
      </button>

    </div>


    <div className="about-highlights">

      <div className="about-card">
        <div className="about-icon">🎓</div>
        <h3>Student Focused</h3>
        <p>
          Designed around the everyday needs of university students.
        </p>
      </div>

      <div className="about-card">
        <div className="about-icon">🔗</div>
        <h3>Everything Connected</h3>
        <p>
          Access important campus information from one platform.
        </p>
      </div>

      <div className="about-card">
        <div className="about-icon">🚀</div>
        <h3>Built to Grow</h3>
        <p>
          A platform that can evolve with the needs of students.
        </p>
      </div>

    </div>

  </div>

</section>

      </main>

      <footer className="footer">

      <div className="footer-content">

        {/* Brand */}
        <div className="footer-brand">

          <img
            src="/logo.png"
            alt="CampusConnect Logo"
            className="footer-logo"
          />

          <p>
            Connecting students, resources and campus life in one place.
          </p>

        </div>


        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>

        </div>


        {/* Contact */}
        <div className="footer-column">

          <h3>Contact</h3>

          <a href="mailto:info@campusconnect.com">
            ✉ info@campusconnect.com
          </a>

          <a href="#">
            📍 University Campus
          </a>

        </div>


        {/* Follow Us */}
        <div className="footer-column">

          <h3>Follow Us</h3>

          <div className="social-links">

            <a href="#" aria-label="Instagram">
              ◎
            </a>

            <a href="#" aria-label="X">
              𝕏
            </a>

            <a href="#" aria-label="LinkedIn">
              in
            </a>

            <a href="#" aria-label="GitHub">
              ◉
            </a>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 CampusConnect. All rights reserved.
        </p>

      </div>

    </footer>

    {showLogin && (
      <div className="login-overlay">

        <div className="login-box">

          <button
            className="close-login"
            onClick={() => setShowLogin(false)}
          >
            ×
          </button>

          <img
            src="/logo.png"
            alt="CampusConnect Logo"
            className="login-logo"
          />

          <h2>Welcome back</h2>

          <p className="login-subtitle">
            Sign in to your CampusConnect account.
          </p>

          <form>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />

            <button
              type="submit"
              className="login-submit"
            >
              Login
            </button>

          </form>

          <p className="login-register">
            Don't have an account?

            <button type="button">
              Create one
            </button>
          </p>

        </div>

      </div>
    )}

    </div>
    )
    }



export default App