import { Link } from 'react-router-dom'

function SoftwareDevelopment() {
  return (
    <div className="lecture-notes-page">

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
      <section className="lecture-notes-header">

        <p className="lecture-notes-label">
          SOFTWARE DEVELOPMENT STUDY GUIDE
        </p>

        <h1>
          Build better software,
          <span>one step at a time.</span>
        </h1>

        <p>
          Review important software development concepts,
          methodologies, testing practices and project management
          principles.
        </p>

      </section>


      {/* Content */}
      <section className="lecture-notes-content">

        {/* Introduction */}
        <div className="lecture-introduction">

          <p className="lecture-small-label">
            STUDY GUIDE
          </p>

          <h2>
            Software Development
          </h2>

          <p>
            This study guide introduces the key concepts involved
            in developing software, from planning and requirements
            gathering to testing, maintenance and project delivery.
          </p>

        </div>


        {/* Topics */}
        <div className="lecture-notes-grid">

          <div className="lecture-note-card">

            <span className="lecture-number">
              01
            </span>

            <h3>
              Software Development Life Cycle
            </h3>

            <p>
              Understand the different stages of software development,
              including planning, analysis, design, development,
              testing, deployment and maintenance.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              02
            </span>

            <h3>
              Software Development Methodologies
            </h3>

            <p>
              Learn about different approaches to software development,
              including Agile, Waterfall and other development methods.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              03
            </span>

            <h3>
              Requirements Analysis
            </h3>

            <p>
              Learn how functional and non-functional requirements
              are identified, documented and used to guide software
              development.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              04
            </span>

            <h3>
              Software Testing
            </h3>

            <p>
              Review the purpose of software testing and learn about
              different testing approaches used to identify problems
              and improve software quality.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              05
            </span>

            <h3>
              Project Management
            </h3>

            <p>
              Understand how software projects are planned, organised
              and monitored to help teams deliver projects successfully.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              06
            </span>

            <h3>
              Software Maintenance
            </h3>

            <p>
              Learn why software requires ongoing maintenance, updates
              and improvements after it has been deployed.
            </p>

          </div>

        </div>


        {/* Study Box */}
        <div className="lecture-study-box">

          <div>

            <p className="lecture-small-label">
              STUDY GUIDE
            </p>

            <h2>
              Understand the Development Process
            </h2>

            <p>
              Focus on understanding how each stage of software
              development connects to the next, from identifying
              requirements to testing and maintaining the final product.
            </p>

          </div>

          <div className="lecture-study-icon">
            💻
          </div>

        </div>


        {/* Key Point */}
        <div className="lecture-key-point">

          <strong>
            Study Tip
          </strong>

          <p>
            When studying software development, focus on understanding
            why each stage is important rather than simply memorising
            the terminology. Try connecting each concept to a real
            software project.
          </p>

        </div>


        {/* Back */}
        <div className="lecture-notes-footer">

          <Link
            to="/resources"
            className="back-link"
          >
            ← Back to Academic Resources
          </Link>

        </div>

      </section>

    </div>
  )
}

export default SoftwareDevelopment