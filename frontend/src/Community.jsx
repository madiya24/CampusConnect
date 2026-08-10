import { Link } from 'react-router-dom'


function Commity() {
  return (
    <div className="commity-page">
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
      
      {/* Hero */}
      <section className="community-page-hero">

        <p className="community-label">
          STUDENT COMMUNITY
        </p>

        <h1>
          Connect. Participate.
          <span>Belong.</span>
        </h1>

        <p>
          CampusConnect brings students together through
          communities, clubs, activities and shared interests.
          Find your people and become part of campus life.
        </p>

      </section>


      {/* Student Groups */}
      <section className="community-groups">

        <div className="community-section-heading">

          <p>FIND YOUR COMMUNITY</p>

          <h2>
            Something for every student.
          </h2>

          <span>
            Explore groups and communities based on your
            interests, studies and hobbies.
          </span>

        </div>


        <div className="community-grid">

          <div className="community-card">

            <div className="community-icon">
              💻
            </div>

            <h3>
              Coding & Technology
            </h3>

            <p>
              Connect with students interested in programming,
              software development, technology and innovation.
            </p>

            <button>
              Explore Group →
            </button>

          </div>


          <div className="community-card">

            <div className="community-icon">
              ⚽
            </div>

            <h3>
              Sports & Fitness
            </h3>

            <p>
              Find sports groups, fitness activities and
              students who enjoy staying active.
            </p>

            <button>
              Explore Group →
            </button>

          </div>


          <div className="community-card">

            <div className="community-icon">
              🎨
            </div>

            <h3>
              Arts & Culture
            </h3>

            <p>
              Discover creative communities, cultural activities,
              music, art and other student interests.
            </p>

            <button>
              Explore Group →
            </button>

          </div>


          <div className="community-card">

            <div className="community-icon">
              📖
            </div>

            <h3>
              Academic Groups
            </h3>

            <p>
              Join study groups and connect with students
              working towards similar academic goals.
            </p>

            <button>
              Explore Group →
            </button>

          </div>

        </div>

      </section>


      {/* Activities */}
      <section className="community-activities">

        <div className="activities-text">

          <p className="community-label">
            GET INVOLVED
          </p>

          <h2>
            Campus life is better
            <span> together.</span>
          </h2>

          <p>
            Whether you want to meet new people, join a club,
            participate in activities or simply find students
            who share your interests, CampusConnect makes it
            easier to get involved.
          </p>


          <div className="activity-list">

            <div>
              <strong>🎉 Social Activities</strong>

              <span>
                Meet other students and enjoy campus activities.
              </span>
            </div>


            <div>
              <strong>👥 Student Clubs</strong>

              <span>
                Discover clubs and communities that match your interests.
              </span>
            </div>


            <div>
              <strong>📚 Study Groups</strong>

              <span>
                Work together and support each other academically.
              </span>
            </div>

          </div>

        </div>


        {/* Join Community */}
        <div className="community-join-card">

          <div className="join-icon">
            🤝
          </div>

          <h3>
            Ready to get involved?
          </h3>

          <p>
            Join the CampusConnect community and start
            connecting with other students.
          </p>

          <button className="community-join-button">
            Join the Community →
          </button>

        </div>

      </section>


      {/* Back to Features */}
      <section className="community-back">

        <Link to="/features">
          ← Back to Features
        </Link>

      </section>

    </div>
  )
}

export default Commity
