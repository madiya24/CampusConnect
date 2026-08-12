import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'



function Commity() {

const [showJoinForm, setShowJoinForm] = useState(false)
  const [selectedGroup, setSelectedGroup] = useState(null)

  const groupDetailsRef = useRef(null)
  

  const showGroupDetails = (group) => {

    setSelectedGroup(group)

    setTimeout(() => {

      groupDetailsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

    }, 100)

  }


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

          <p>
            FIND YOUR COMMUNITY
          </p>

          <h2>
            Something for every student.
          </h2>

          <span>
            Explore groups and communities based on your
            interests, studies and hobbies.
          </span>

        </div>


        <div className="community-grid">


          {/* Coding & Technology */}
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

            <button
              onClick={() => showGroupDetails('coding')}
            >
              Explore Group →
            </button>

          </div>


          {/* Sports & Fitness */}
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

            <button
              onClick={() => showGroupDetails('sports')}
            >
              Explore Group →
            </button>

          </div>


          {/* Arts & Culture */}
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

            <button
              onClick={() => showGroupDetails('arts')}
            >
              Explore Group →
            </button>

          </div>


          {/* Academic Groups */}
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

            <button
              onClick={() => showGroupDetails('academic')}
            >
              Explore Group →
            </button>

          </div>


        </div>


        {/* =====================================================
            GROUP DETAILS
        ===================================================== */}

        <div ref={groupDetailsRef}>


          {/* Coding Details */}
          {selectedGroup === 'coding' && (

            <div className="actual-community-details">

              <p className="community-label">
                GROUP 01
              </p>

              <h2>
                Coding & Technology
              </h2>

              <p>
                The Coding & Technology community brings together
                students who are interested in programming,
                software development, technology and innovation.
              </p>


              <h3>
                What You Can Do
              </h3>

              <ul>

                <li>
                  Share programming knowledge with other students.
                </li>

                <li>
                  Work together on coding projects.
                </li>

                <li>
                  Discuss software development and technology.
                </li>

                <li>
                  Learn about new technologies and programming tools.
                </li>

                <li>
                  Get help with programming challenges.
                </li>

              </ul>


              <h3>
                Who Should Join?
              </h3>

              <p>
                This group is suitable for students who are
                interested in programming, computer science,
                software development or technology.
              </p>


              <div className="community-key-point">

                <strong>
                  💡 Community Tip
                </strong>

                <p>
                  Share what you know, ask questions and work
                  together with other students to improve your
                  technical skills.
                </p>

              </div>

            </div>

          )}


          {/* Sports Details */}
          {selectedGroup === 'sports' && (

            <div className="actual-community-details">

              <p className="community-label">
                GROUP 02
              </p>

              <h2>
                Sports & Fitness
              </h2>

              <p>
                The Sports & Fitness community connects students
                who enjoy sports, fitness and staying active.
              </p>


              <h3>
                What You Can Do
              </h3>

              <ul>

                <li>
                  Find students who enjoy the same sports.
                </li>

                <li>
                  Participate in fitness activities.
                </li>

                <li>
                  Organise friendly games and competitions.
                </li>

                <li>
                  Share fitness tips and activities.
                </li>

                <li>
                  Meet other students through sports.
                </li>

              </ul>


              <h3>
                Who Should Join?
              </h3>

              <p>
                This group is suitable for students who enjoy
                sports, fitness or simply want to become more
                active on campus.
              </p>


              <div className="community-key-point">

                <strong>
                  💡 Community Tip
                </strong>

                <p>
                  Get involved, stay active and encourage other
                  students to participate.
                </p>

              </div>

            </div>

          )}


          {/* Arts Details */}
          {selectedGroup === 'arts' && (

            <div className="actual-community-details">

              <p className="community-label">
                GROUP 03
              </p>

              <h2>
                Arts & Culture
              </h2>

              <p>
                The Arts & Culture community gives students a
                place to explore creativity, music, art and
                different cultural interests.
              </p>


              <h3>
                What You Can Do
              </h3>

              <ul>

                <li>
                  Share creative work and ideas.
                </li>

                <li>
                  Discover music and artistic activities.
                </li>

                <li>
                  Participate in cultural events.
                </li>

                <li>
                  Meet students with similar creative interests.
                </li>

                <li>
                  Explore different forms of art and culture.
                </li>

              </ul>


              <h3>
                Who Should Join?
              </h3>

              <p>
                This group is suitable for students interested
                in music, art, culture, creativity and
                self-expression.
              </p>


              <div className="community-key-point">

                <strong>
                  💡 Community Tip
                </strong>

                <p>
                  Share your creativity and discover what other
                  students have to offer.
                </p>

              </div>

            </div>

          )}


          {/* Academic Details */}
          {selectedGroup === 'academic' && (

            <div className="actual-community-details">

              <p className="community-label">
                GROUP 04
              </p>

              <h2>
                Academic Groups
              </h2>

              <p>
                Academic Groups help students connect with
                classmates who are working towards similar
                academic goals.
              </p>


              <h3>
                What You Can Do
              </h3>

              <ul>

                <li>
                  Create and join study groups.
                </li>

                <li>
                  Discuss difficult topics with other students.
                </li>

                <li>
                  Share study resources and notes.
                </li>

                <li>
                  Prepare for tests and assignments together.
                </li>

                <li>
                  Support other students academically.
                </li>

              </ul>


              <h3>
                Who Should Join?
              </h3>

              <p>
                This group is suitable for students who want
                to improve their academic performance and
                learn together with their classmates.
              </p>


              <div className="community-key-point">

                <strong>
                  💡 Community Tip
                </strong>

                <p>
                  Studying together can make difficult topics
                  easier to understand and help you stay motivated.
                </p>

              </div>

            </div>

          )}

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

              <strong>
                🎉 Social Activities
              </strong>

              <span>
                Meet other students and enjoy campus activities.
              </span>

            </div>


            <div>

              <strong>
                👥 Student Clubs
              </strong>

              <span>
                Discover clubs and communities that match your interests.
              </span>

            </div>


            <div>

              <strong>
                📚 Study Groups
              </strong>

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

          <button
              className="community-join-button"
              onClick={() => setShowJoinForm(true)}
            >
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
          {showJoinForm && (
  <div className="join-overlay">

    <div className="join-modal">

      <button
        className="close-join"
        onClick={() => setShowJoinForm(false)}
      >
        ×
      </button>

      <p className="join-modal-label">
        JOIN CAMPUSCONNECT
      </p>

      <h2>
        Join the Community
      </h2>

      <p className="join-modal-text">
        Connect with other students and become part
        of the CampusConnect community.
      </p>

      <form>

        <label>
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your name"
        />

        <label>
          Student Email
        </label>

        <input
          type="email"
          placeholder="Enter your student email"
        />

        <label>
          Choose a Community
        </label>

        <select>
          <option>Coding & Technology</option>
          <option>Sports & Fitness</option>
          <option>Arts & Culture</option>
          <option>Academic Groups</option>
        </select>

        <button
          type="button"
          className="join-submit"
          onClick={() => setShowJoinForm(false)}
        >
          Join Community
        </button>

      </form>

    </div>

  </div>
)}

    </div>

  )
}

  
export default Commity