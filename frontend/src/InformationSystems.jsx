import { Link } from 'react-router-dom'

function InformationSystems() {
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
          INFORMATION SYSTEMS PAST PAPERS
        </p>

        <h1>
          Practice more,
          <span>prepare better.</span>
        </h1>

        <p>
          Test your understanding of information systems concepts
          with practice questions covering systems, organisations,
          databases and information technology.
        </p>

      </section>


      {/* Content */}
      <section className="lecture-notes-content">

        {/* Introduction */}
        <div className="lecture-introduction">

          <p className="lecture-small-label">
            PAST PAPERS
          </p>

          <h2>
            Information Systems
          </h2>

          <p>
            Use these practice papers to revise important information
            systems concepts and prepare for assessments.
          </p>

        </div>


        {/* Past Papers */}
        <div className="lecture-notes-grid">

          {/* Past Paper 1 */}
          <div className="lecture-note-card">

            <span className="lecture-number">
              PAST PAPER 01
            </span>

            <h3>
              Information Systems Fundamentals
            </h3>

            <p>
              Practice questions covering information systems,
              business processes, system components and the role
              of information technology in organisations.
            </p>

            <Link
              to="/resources/information-systems/paper-1"
              className="topic-link"
            >
              View Past Paper →
            </Link>

          </div>


          {/* Past Paper 2 */}
          <div className="lecture-note-card">

            <span className="lecture-number">
              PAST PAPER 02
            </span>

            <h3>
              Information Technology & Systems
            </h3>

            <p>
              Test your knowledge of databases, information
              management, system development and technology
              used in modern organisations.
            </p>

            <Link
              to="/resources/information-systems/paper-2"
              className="topic-link"
            >
              View Past Paper →
            </Link>

          </div>

        </div>


        {/* Study Box */}
        <div className="lecture-study-box">

          <div>

            <p className="lecture-small-label">
              EXAM PREPARATION
            </p>

            <h2>
              Test Your Knowledge
            </h2>

            <p>
              Work through the practice questions without looking
              at your notes first. Then review the topics where you
              need more practice.
            </p>

          </div>

          <div className="lecture-study-icon">
            📝
          </div>

        </div>


        {/* Key Point */}
        <div className="lecture-key-point">

          <strong>
            Revision Tip
          </strong>

          <p>
            Try completing each past paper under timed conditions.
            This can help you identify areas that need more revision
            before your assessment.
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

export default InformationSystems