import { Link } from 'react-router-dom'

function Features() {
  return (
    <div className="features-page">

      <section className="features-page-hero">

        <p className="features-label">
          CAMPUSCONNECT FEATURES
        </p>

        <h1>
          Everything students need,
          <span>all in one place.</span>
        </h1>

        <p>
          Explore the tools and resources CampusConnect provides
          to help you stay informed, connected and involved in
          your campus community.
        </p>

      </section>


      <section className="features-page-content">

        {/* Campus Events */}

        <div className="feature-detail">

          <img
            src="/event2.jpg"
            alt="Campus Events"
          />

          <div>
            <p className="feature-number">01</p>

            <h2>Campus Events</h2>

            <p>
              Discover upcoming university events, activities,
              workshops and social gatherings. CampusConnect makes
              it easier to find out what's happening around campus
              and get involved.
            </p>

            <Link
              to="/events"
              className="feature-action"
            >
              Explore Events →
            </Link>

          </div>

        </div>


        {/* Announcements */}

        <div className="feature-detail reverse">

          <img
            src="/announcement.jpg"
            alt="Announcements"
          />

          <div>
            <p className="feature-number">02</p>

            <h2>Announcements</h2>

            <p>
              Stay up to date with important university announcements,
              notices and information so you never miss something
              important.
            </p>

            <Link
              to="/announcements"
              className="feature-action"
            >
              View Announcements →
            </Link>

          </div>

        </div>


        {/* Study Resources */}

        <div className="feature-detail">

          <img
            src="/resources.jpg"
            alt="Study Resources"
          />

          <div>
            <p className="feature-number">03</p>

            <h2>Study Resources</h2>

            <p>
              Access useful academic resources and study materials
              that can help you stay organised and make the most
              of your studies.
            </p>

            <Link
              to="/resources"
              className="feature-action"
            >
              Explore Resources →
            </Link>

          </div>

        </div>


        {/* Student Community */}

        <div className="feature-detail reverse">

          <img
            src="/commity_image.jpg"
            alt="Student Community"
          />

          <div>
            <p className="feature-number">04</p>

            <h2>Student Community</h2>

            <p>
              Connect with other students, participate in campus
              activities and become part of a supportive university
              community.
            </p>

            <Link
              to="/community"
              className="feature-action"
            >
              Join Community →
            </Link>

          </div>

        </div>


        {/* Back to Home */}

        <div className="announcements-footer">
          <Link
            to="/"
            className="secondary-button"
          >
            ← Back to Home
          </Link>
        </div>

      </section>

    </div>
  )
}

export default Features