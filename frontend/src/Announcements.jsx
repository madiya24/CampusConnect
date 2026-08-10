import { Link } from 'react-router-dom'

function Announcements() {
  return (
    <div className="announcements-page">

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


      {/* Header */}
      <section className="announcements-header">

        <p className="announcements-label">
          CAMPUS ANNOUNCEMENTS
        </p>

        <h1>
          Stay informed,
          <span>stay up to date.</span>
        </h1>

        <p>
          Keep up with important university news, academic updates,
          deadlines and information happening around campus.
        </p>

      </section>


      {/* Announcements */}
      <section className="announcements-section">

        <div className="announcements-top">

          <div>

            <h2>
              Latest Announcements
            </h2>

            <p>
              Important information from your university community.
            </p>

          </div>

        </div>


        {/* Announcement Categories */}
        <div className="announcement-categories">

          <button className="announcement-category active">
            All
          </button>

          <button className="announcement-category">
            Academic
          </button>

          <button className="announcement-category">
            Important
          </button>

          <button className="announcement-category">
            Campus
          </button>

          <button className="announcement-category">
            Events
          </button>

        </div>


        {/* Announcement List */}
        <div className="announcements-list">


          {/* Announcement 1 */}
          <article className="announcement-card">

            <div className="announcement-date">
              <strong>12</strong>
              <span>AUG</span>
            </div>

            <div className="announcement-content">

              <span className="announcement-category-label important">
                IMPORTANT
              </span>

              <h3>
                Student Registration Deadline
              </h3>

              <p>
                Students are reminded to complete their registration
                before the deadline. Please ensure that all required
                modules and personal information have been confirmed.
              </p>

              <button className="announcement-button">
                Read More →
              </button>

            </div>

          </article>


          {/* Announcement 2 */}
          <article className="announcement-card">

            <div className="announcement-date">
              <strong>15</strong>
              <span>AUG</span>
            </div>

            <div className="announcement-content">

              <span className="announcement-category-label academic">
                ACADEMIC
              </span>

              <h3>
                Examination Timetable Available
              </h3>

              <p>
                The examination timetable is now available. Students
                should review their examination dates, times and venues
                and report any issues to the relevant department.
              </p>

              <button className="announcement-button">
                Read More →
              </button>

            </div>

          </article>


          {/* Announcement 3 */}
          <article className="announcement-card">

            <div className="announcement-date">
              <strong>18</strong>
              <span>AUG</span>
            </div>

            <div className="announcement-content">

              <span className="announcement-category-label campus">
                CAMPUS
              </span>

              <h3>
                Library Operating Hours Updated
              </h3>

              <p>
                The campus library will have updated operating hours
                during the upcoming examination period. Students are
                encouraged to plan their study sessions accordingly.
              </p>

              <button className="announcement-button">
                Read More →
              </button>

            </div>

          </article>


          {/* Announcement 4 */}
          <article className="announcement-card">

            <div className="announcement-date">
              <strong>22</strong>
              <span>AUG</span>
            </div>

            <div className="announcement-content">

              <span className="announcement-category-label event">
                EVENT
              </span>

              <h3>
                Student Orientation Session
              </h3>

              <p>
                New students are invited to attend the upcoming
                orientation session. The session will introduce
                students to campus facilities, services and resources.
              </p>

              <button className="announcement-button">
                Read More →
              </button>

            </div>

          </article>


        </div>


        {/* Back */}
        <div className="announcements-footer">

          <Link
            to="/features"
            className="back-link"
          >
            ← Back to Features
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Announcements