import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'


function Events() {


  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedEvent, setSelectedEvent] = useState(null)


  // Refs for each event detail
  const careerDetailsRef = useRef(null)
  const academicDetailsRef = useRef(null)
  const socialDetailsRef = useRef(null)
  const sportsDetailsRef = useRef(null)


  // Show event details and scroll to them
  const showEventDetails = (event) => {

    setSelectedEvent(event)

    setTimeout(() => {

      if (event === 'career') {
        careerDetailsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

      if (event === 'academic') {
        academicDetailsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

      if (event === 'social') {
        socialDetailsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

      if (event === 'sports') {
        sportsDetailsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }

    }, 100)

  }


  // Change category and close any open event details
  const handleCategoryChange = (category) => {

    setSelectedCategory(category)
    setSelectedEvent(null)

  }


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



        {/* Event Categories */}
        <div className="event-categories">


          {/* All Events */}
          <button
            className={`category ${
              selectedCategory === 'all'
                ? 'active'
                : ''
            }`}
            onClick={() => handleCategoryChange('all')}
          >
            All Events
          </button>



          {/* Academic */}
          <button
            className={`category ${
              selectedCategory === 'academic'
                ? 'active'
                : ''
            }`}
            onClick={() => handleCategoryChange('academic')}
          >
            Academic
          </button>



          {/* Social */}
          <button
            className={`category ${
              selectedCategory === 'social'
                ? 'active'
                : ''
            }`}
            onClick={() => handleCategoryChange('social')}
          >
            Social
          </button>



          {/* Sports */}
          <button
            className={`category ${
              selectedCategory === 'sports'
                ? 'active'
                : ''
            }`}
            onClick={() => handleCategoryChange('sports')}
          >
            Sports
          </button>



          {/* Career */}
          <button
            className={`category ${
              selectedCategory === 'career'
                ? 'active'
                : ''
            }`}
            onClick={() => handleCategoryChange('career')}
          >
            Career
          </button>


        </div>



        {/* Events */}
        <div className="events-grid">


          {/* Event 1 - Career */}
          {(
            selectedCategory === 'all' ||
            selectedCategory === 'career'
          ) && (

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


                <button
                  className="event-button"
                  onClick={() => showEventDetails('career')}
                >
                  View Details →
                </button>


              </div>


            </div>

          )}



          {/* Event 2 - Academic */}
          {(
            selectedCategory === 'all' ||
            selectedCategory === 'academic'
          ) && (

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


                <button
                  className="event-button"
                  onClick={() => showEventDetails('academic')}
                >
                  View Details →
                </button>


              </div>


            </div>

          )}



          {/* Event 3 - Social */}
          {(
            selectedCategory === 'all' ||
            selectedCategory === 'social'
          ) && (

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


                <button
                  className="event-button"
                  onClick={() => showEventDetails('social')}
                >
                  View Details →
                </button>


              </div>


            </div>

          )}



          {/* Event 4 - Sports */}
          {(
            selectedCategory === 'all' ||
            selectedCategory === 'sports'
          ) && (

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


                <button
                  className="event-button"
                  onClick={() => showEventDetails('sports')}
                >
                  View Details →
                </button>


              </div>


            </div>

          )}


        </div>



        {/* =====================================================
            EVENT DETAILS
        ===================================================== */}



        {/* Career Event Details */}
        {selectedEvent === 'career' && (

          <div
            ref={careerDetailsRef}
            className="actual-event-details"
          >


            <p className="event-small-label">
              EVENT 01
            </p>


            <h2>
              Career & Internship Fair
            </h2>


            <p>
              The Career & Internship Fair gives students the opportunity
              to meet companies, discover internship opportunities and
              learn more about different career paths.
            </p>


            <h3>
              Event Information
            </h3>


            <div className="event-detail-info">


              <p>
                📅 <strong>Date:</strong> 15 August 2026
              </p>


              <p>
                🕐 <strong>Time:</strong> 10:00 AM – 3:00 PM
              </p>


              <p>
                📍 <strong>Location:</strong> Main Campus Hall
              </p>


              <p>
                🏷️ <strong>Category:</strong> Career
              </p>


            </div>


            <h3>
              What to Expect
            </h3>


            <ul>
              <li>Meet representatives from different companies.</li>
              <li>Discover internship and graduate opportunities.</li>
              <li>Learn about different career paths.</li>
              <li>Ask employers questions about their industries.</li>
              <li>Learn about skills employers are looking for.</li>
            </ul>


            <h3>
              Why Attend?
            </h3>


            <p>
              This event can help students build professional
              connections, learn what employers expect and discover
              opportunities related to their field of study.
            </p>


            <div className="event-key-point">


              <strong>
                💡 Event Reminder
              </strong>


              <p>
                Bring your CV and be prepared to introduce yourself
                to potential employers.
              </p>


            </div>


          </div>

        )}



        {/* Academic Event Details */}
        {selectedEvent === 'academic' && (

          <div
            ref={academicDetailsRef}
            className="actual-event-details"
          >


            <p className="event-small-label">
              EVENT 02
            </p>


            <h2>
              Coding Workshop
            </h2>


            <p>
              The Coding Workshop is a practical learning session designed
              to help students improve their programming skills through
              hands-on activities and guided exercises.
            </p>


            <h3>
              Event Information
            </h3>


            <div className="event-detail-info">


              <p>
                📅 <strong>Date:</strong> 20 August 2026
              </p>


              <p>
                🕐 <strong>Time:</strong> 2:00 PM – 4:00 PM
              </p>


              <p>
                📍 <strong>Location:</strong> Computer Lab 2
              </p>


              <p>
                🏷️ <strong>Category:</strong> Academic
              </p>


            </div>


            <h3>
              What to Expect
            </h3>


            <ul>
              <li>Practical programming exercises.</li>
              <li>Guidance from experienced students and tutors.</li>
              <li>Opportunities to practise coding techniques.</li>
              <li>Help with common programming challenges.</li>
              <li>Time to ask questions and improve your understanding.</li>
            </ul>


            <h3>
              Who Should Attend?
            </h3>


            <p>
              The workshop is suitable for students who want to
              strengthen their programming fundamentals and gain more
              confidence when writing code.
            </p>


            <div className="event-key-point">


              <strong>
                💡 Workshop Reminder
              </strong>


              <p>
                Bring your laptop if possible and be ready to participate
                in the practical coding activities.
              </p>


            </div>


          </div>

        )}



        {/* Social Event Details */}
        {selectedEvent === 'social' && (

          <div
            ref={socialDetailsRef}
            className="actual-event-details"
          >


            <p className="event-small-label">
              EVENT 03
            </p>


            <h2>
              Student Social Night
            </h2>


            <p>
              Student Social Night is an opportunity for students to
              meet new people, make friends and enjoy an evening of
              music, games and entertainment.
            </p>


            <h3>
              Event Information
            </h3>


            <div className="event-detail-info">


              <p>
                📅 <strong>Date:</strong> 22 August 2026
              </p>


              <p>
                🕐 <strong>Time:</strong> 6:00 PM – 10:00 PM
              </p>


              <p>
                📍 <strong>Location:</strong> Student Centre
              </p>


              <p>
                🏷️ <strong>Category:</strong> Social
              </p>


            </div>


            <h3>
              What to Expect
            </h3>


            <ul>
              <li>Music and entertainment.</li>
              <li>Fun games and activities.</li>
              <li>Opportunities to meet other students.</li>
              <li>A relaxed environment to socialise.</li>
              <li>Activities designed to encourage student interaction.</li>
            </ul>


            <h3>
              Why Attend?
            </h3>


            <p>
              Getting involved in social activities can help students
              build friendships, meet people from different backgrounds
              and become more involved in campus life.
            </p>


            <div className="event-key-point">


              <strong>
                💡 Event Reminder
              </strong>


              <p>
                Come ready to have fun, meet new people and enjoy the
                evening with fellow students.
              </p>


            </div>


          </div>

        )}



        {/* Sports Event Details */}
        {selectedEvent === 'sports' && (

          <div
            ref={sportsDetailsRef}
            className="actual-event-details"
          >


            <p className="event-small-label">
              EVENT 04
            </p>


            <h2>
              Campus Sports Day
            </h2>


            <p>
              Campus Sports Day gives students the opportunity to
              participate in different sporting activities and represent
              their faculties in a fun campus competition.
            </p>


            <h3>
              Event Information
            </h3>


            <div className="event-detail-info">


              <p>
                📅 <strong>Date:</strong> 28 August 2026
              </p>


              <p>
                🕐 <strong>Time:</strong> 9:00 AM – 4:00 PM
              </p>


              <p>
                📍 <strong>Location:</strong> University Sports Grounds
              </p>


              <p>
                🏷️ <strong>Category:</strong> Sports
              </p>


            </div>


            <h3>
              What to Expect
            </h3>


            <ul>
              <li>Different sporting activities and competitions.</li>
              <li>Opportunities to represent your faculty.</li>
              <li>Team-based activities.</li>
              <li>Fun competitions between students.</li>
              <li>A chance to meet and interact with other students.</li>
            </ul>


            <h3>
              Who Can Participate?
            </h3>


            <p>
              Students who enjoy sports and want to participate in
              campus activities are encouraged to take part.
            </p>


            <div className="event-key-point">


              <strong>
                💡 Sports Day Reminder
              </strong>


              <p>
                Wear comfortable clothing, stay hydrated and arrive
                early so you have enough time to prepare.
              </p>


            </div>


          </div>

        )}


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