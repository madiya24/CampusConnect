import { Link } from 'react-router-dom'

function InformationSystemsPaper1() {
  return (
    <div className="lecture-notes-page">

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


      <section className="lecture-notes-header">

        <p className="lecture-notes-label">
          INFORMATION SYSTEMS
        </p>

        <h1>
          Past Paper 01
          <span>Practice Questions</span>
        </h1>

        <p>
          Information Systems Fundamentals
        </p>

      </section>


      <section className="actual-lecture-notes">

        <p className="lecture-small-label">
          PAST PAPER 01
        </p>

        <h2>
          Information Systems Fundamentals
        </h2>

        <h3>
          Question 1
        </h3>

        <p>
          Explain what an information system is and describe
          the main components that make up an information system.
        </p>


        <h3>
          Question 2
        </h3>

        <p>
          Explain the difference between data and information.
          Give one example of each.
        </p>


        <h3>
          Question 3
        </h3>

        <p>
          Describe three ways in which information systems can
          support organisations in their daily operations.
        </p>


        <h3>
          Question 4
        </h3>

        <p>
          Explain the role of people, processes and technology
          within an information system.
        </p>


        <div className="lecture-key-point">

          <strong>
            Revision Tip
          </strong>

          <p>
            Try answering these questions without using your
            notes first. Review your answers afterwards and
            identify any topics you need to revise.
          </p>

        </div>


        <div className="lecture-notes-footer">

          <Link
            to="/resources/information-systems"
            className="back-link"
          >
            ← Back to Information Systems
          </Link>

        </div>

      </section>

    </div>
  )
}

export default InformationSystemsPaper1