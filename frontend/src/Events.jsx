import { Link } from 'react-router-dom'

function Events() {
  return (
    <div className="events-page">

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


      {/* Events Header */}
      <section className="events-header">

        <p className="events-label">
          CAMPUS EVENTS
        </p>

        <h1>
          Discover what's
          <span> happening on campus.</span>
        </h1>

        <p>
          Find upcoming events, workshops, activities and
          opportunities happening around your university.
        </p>

      </section>


      {/* Event Categories */}
      <section className="events-section">

        <div className="events-top">

          <div>
            <h2>
              Upcoming Events
            </h2>

            <p>
              Explore events happening around campus.
            </p>
          </div>

        </div>


        <div className="event-categories">

          <button className="category active">
            All Events
          </button>

          <button className="category">
            Academic
          </button>

          <button className="category">
            Social
          </button>

          <button className="category">
            Sports
          </button>

          <button className="category">
            Career
          </button>

        </div>


        {/* Events */}
        <div className="events-grid">


          {/* Event 1 */}
          <div className="event-card">

            <div className="event-image">

              <img
                src="/events.png"
                alt="Career Fair"
              />

            </div>

            <div className="event-content">

              <span className="event-category">
                CAREER
              </span>

              <h3>
                Career & Internship Fair
              </h3>

              <p>
                Meet companies, discover internship opportunities
                and learn more about careers in your field.
              </p>

              <div className="event-info">

                <span>
                  📅 15 August 2026
                </span>

                <span>
                  🕐 10:00 AM – 3:00 PM
                </span>

                <span>
                  📍 Main Campus Hall
                </span>

              </div>

              <button className="event-button">
                View Details →
              </button>

            </div>

          </div>


          {/* Event 2 */}
          <div className="event-card">

            <div className="event-image">

              <img
                src="/events.png"
                alt="Coding Workshop"
              />

            </div>

            <div className="event-content">

              <span className="event-category">
                ACADEMIC
              </span>

              <h3>
                Coding Workshop
              </h3>

              <p>
                Improve your programming skills through a practical
                coding workshop led by experienced students and tutors.
              </p>

              <div className="event-info">

                <span>
                  📅 20 August 2026
                </span>

                <span>
                  🕐 2:00 PM – 4:00 PM
                </span>

                <span>
                  📍 Computer Lab 2
                </span>

              </div>

              <button className="event-button">
                View Details →
              </button>

            </div>

          </div>


          {/* Event 3 */}
          <div className="event-card">

            <div className="event-image">

              <img
                src="/events.png"
                alt="Student Social Night"
              />

            </div>

            <div className="event-content">

              <span className="event-category">
                SOCIAL
              </span>

              <h3>
                Student Social Night
              </h3>

              <p>
                Meet new people, make friends and enjoy an evening
                filled with music, games and entertainment.
              </p>

              <div className="event-info">

                <span>
                  📅 22 August 2026
                </span>

                <span>
                  🕐 6:00 PM – 10:00 PM
                </span>

                <span>
                  📍 Student Centre
                </span>

              </div>

              <button className="event-button">
                View Details →
              </button>

            </div>

          </div>


          {/* Event 4 */}
          <div className="event-card">

            <div className="event-image">

              <img
                src="/events.png"
                alt="Sports Day"
              />

            </div>

            <div className="event-content">

              <span className="event-category">
                SPORTS
              </span>

              <h3>
                Campus Sports Day
              </h3>

              <p>
                Take part in different sporting activities and
                represent your faculty in a fun campus competition.
              </p>

              <div className="event-info">

                <span>
                  📅 28 August 2026
                </span>

                <span>
                  🕐 9:00 AM – 4:00 PM
                </span>

                <span>
                  📍 University Sports Grounds
                </span>

              </div>

              <button className="event-button">
                View Details →
              </button>

            </div>

          </div>


        </div>

      </section>


      {/* Back to Features */}
      <div className="events-footer">

        <Link
          to="/features"
          className="back-link"
        >
          ← Back to Features
        </Link>

      </div>

    </div>
  )
}

export default Events