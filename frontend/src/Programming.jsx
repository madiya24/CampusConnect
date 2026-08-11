import { Link } from 'react-router-dom'

function Programming() {
  return (
    <div className="programming-page">

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

          <Link to="/resources">
            Resources
          </Link>

          <Link to="/#about">
            About
          </Link>

        </div>

      </nav>


      {/* Header */}
      <section className="programming-header">

        <p className="programming-label">
          LECTURE NOTES
        </p>

        <h1>
          Programming
          <span>Fundamentals</span>
        </h1>

        <p>
          Build a strong foundation in programming concepts,
          problem-solving and software development.
        </p>

      </section>


      {/* Main Content */}
      <section className="programming-content">

        {/* Overview */}
        <div className="programming-overview">

          <div className="programming-icon">
            📖
          </div>

          <div>

            <p className="programming-small-label">
              COURSE RESOURCE
            </p>

            <h2>
              Programming Fundamentals
            </h2>

            <p>
              These lecture notes introduce the fundamental
              concepts of programming and provide students with
              the knowledge needed to understand how software
              applications are developed.
            </p>

          </div>

        </div>


        {/* Topics */}
        <div className="programming-section">

         <h2 className="topics-covered-title">
            Topics Covered
          </h2>

          <div className="programming-topics">

            <div className="programming-topic">
              <span>01</span>
              <div>
                <h3>Variables & Data Types</h3>
                <p>
                  Learn how information is stored and used
                  inside a program.
                </p>
              </div>
            </div>


            <div className="programming-topic">
              <span>02</span>
              <div>
                <h3>Conditional Statements</h3>
                <p>
                  Understand how programs make decisions
                  using conditions.
                </p>
              </div>
            </div>


            <div className="programming-topic">
              <span>03</span>
              <div>
                <h3>Loops</h3>
                <p>
                  Learn how to repeat instructions efficiently
                  using different types of loops.
                </p>
              </div>
            </div>


            <div className="programming-topic">
              <span>04</span>
              <div>
                <h3>Object-Oriented Programming</h3>
                <p>
                  Explore classes, objects, methods and the
                  principles of object-oriented programming.
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* Study Material */}
        <div className="programming-material">

          <div>

            <p className="programming-small-label">
              STUDY MATERIAL
            </p>

            <h2>
              Ready to start learning?
            </h2>

            <p>
              Access the programming fundamentals material
              and use it as a guide while studying.
            </p>

          </div>

          <Link
                to="/resources/programming/lecture-notes"
                className="programming-download"
                >
                📄 View Lecture Notes
            </Link>

        </div>


        {/* Study Tips */}
        <div className="programming-tips">

          <h2>
            Study Tips
          </h2>

          <ul>

            <li>
              Practice writing small programs regularly.
            </li>

            <li>
              Understand the logic behind your code instead
              of only memorising syntax.
            </li>

            <li>
              Break complex programming problems into smaller
              steps.
            </li>

            <li>
              Test your code and learn from errors.
            </li>

          </ul>

        </div>


        {/* Back */}
        <div className="programming-footer">

          <Link
            to="/resources"
            className="back-link"
          >
            ← Back to Resources
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Programming