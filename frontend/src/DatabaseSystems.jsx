import { Link } from 'react-router-dom'

function DatabaseSystems() {
  return (
    <div className="past-papers-page">

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
      <section className="past-papers-header">

        <p className="past-papers-label">
          DATABASE SYSTEMS
        </p>

        <h1>
          Practice more,
          <span>prepare better.</span>
        </h1>

        <p>
          Use previous database assessment papers to practise
          important concepts and prepare for your upcoming tests
          and examinations.
        </p>

      </section>


      {/* Past Papers */}
      <section className="past-papers-section">

        <div className="past-papers-top">

          <p className="past-papers-small-label">
            PAST PAPERS
          </p>

          <h2>
            Database Systems Papers
          </h2>

          <p>
            Choose a past paper below and test your understanding
            of database systems.
          </p>

        </div>


        {/* Paper Grid */}
        <div className="past-papers-grid">


          {/* Past Paper 1 */}
          <article className="past-paper-card">

            <div className="past-paper-icon">
              📝
            </div>

            <span className="past-paper-type">
              PAST PAPER 01
            </span>

            <h3>
              Database Systems Test 1
            </h3>

            <p>
              Practice questions covering database concepts,
              relational databases, tables, keys, relationships
              and basic SQL queries.
            </p>

            <div className="past-paper-info">

              <span>
                📚 Database Systems
              </span>

              <span>
                📄 Past Paper
              </span>

            </div>

            <Link
                to="/resources/database/paper-1"
                className="past-paper-button"
                >
                View Past Paper →
            </Link>

          </article>


          {/* Past Paper 2 */}
          <article className="past-paper-card">

            <div className="past-paper-icon">
              📝
            </div>

            <span className="past-paper-type">
              PAST PAPER 02
            </span>

            <h3>
              Database Systems Examination
            </h3>

            <p>
              Revision questions covering SQL queries,
              normalisation, database design, primary keys,
              foreign keys and relationships.
            </p>

            <div className="past-paper-info">

              <span>
                📚 Database Systems
              </span>

              <span>
                📄 Past Paper
              </span>

            </div>

            <Link
                to="/resources/database/paper-2"
                className="past-paper-button"
                >
                View Past Paper →
            </Link>

          </article>


        </div>


        {/* Study Tip */}
        <div className="past-paper-tip">

          <strong>
            💡 Study Tip
          </strong>

          <p>
            Try answering each paper without looking at your
            notes first. Afterwards, review the topics you found
            difficult and use your study materials to improve.
          </p>

        </div>


        {/* Back */}
        <div className="past-papers-footer">

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

export default DatabaseSystems