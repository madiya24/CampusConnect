import { Link } from 'react-router-dom'

function Community() {
  return (
    <div className="feature-page">

      {/* Navigation */}
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

          <Link to="/#about">
            About
          </Link>

        </div>

      </nav>


      {/* Community Hero */}
      <section className="features-page-hero">

        <p className="features-label">
          STUDENT COMMUNITY
        </p>

        <h1>
          Connect with students,
          <span>build your community.</span>
        </h1>

        <p>
          Connect with other students, discover student activities
          and become part of a supportive university community.
        </p>

      </section>


      {/* Community Content */}
      <section className="features-page-content">

        <div className="feature-detail">

          <img
            src="/community.png"
            alt="Student Community"
          />

          <div>

            <p className="feature-number">
              01
            </p>

            <h2>
              Meet Other Students
            </h2>

            <p>
              CampusConnect makes it easier to connect with students
              who share similar interests, courses and activities.
              Build new friendships and become more involved in
              university life.
            </p>

          </div>

        </div>


        <div className="feature-detail reverse">

          <img
            src="/community.png"
            alt="Student Activities"
          />

          <div>

            <p className="feature-number">
              02
            </p>

            <h2>
              Join Student Activities
            </h2>

            <p>
              Discover student clubs, societies and campus activities.
              Find opportunities to participate, meet new people and
              make the most of your university experience.
            </p>

          </div>

        </div>


        <div className="feature-detail">

          <img
            src="/community.png"
            alt="Student Support"
          />

          <div>

            <p className="feature-number">
              03
            </p>

            <h2>
              Support Each Other
            </h2>

            <p>
              Share experiences, communicate with other students and
              create a supportive environment where everyone can feel
              connected and included.
            </p>

          </div>

        </div>


        <div className="feature-detail reverse">

          <img
            src="/community.png"
            alt="Campus Community"
          />

          <div>

            <p className="feature-number">
              04
            </p>

            <h2>
              Be Part of Campus Life
            </h2>

            <p>
              Stay involved in what's happening around campus and
              take an active role in your university community.
            </p>

            <Link
              to="/"
              className="feature-action"
            >
              Back to Home →
            </Link>

          </div>

        </div>

      </section>

    </div>
  )
}

export default Community