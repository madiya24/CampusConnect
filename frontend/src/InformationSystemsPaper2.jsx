import { Link } from 'react-router-dom'

function InformationSystemsPaper2() {
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
          Past Paper 02
          <span>Practice Questions</span>
        </h1>

        <p>
          Information Technology and Systems
        </p>

      </section>


      <section className="actual-lecture-notes">

        <p className="lecture-small-label">
          PAST PAPER 02
        </p>

        <h2>
          Information Technology & Systems
        </h2>

        <h3>
          Question 1
        </h3>

        <p>
          Explain the purpose of a database within an information
          system and describe two benefits of using a database.
        </p>


        <h3>
          Question 2
        </h3>

        <p>
          Describe the difference between hardware and software
          and provide two examples of each.
        </p>


        <h3>
          Question 3
        </h3>

        <p>
          Explain why information security is important to
          organisations that use information systems.
        </p>


        <h3>
          Question 4
        </h3>

        <p>
          Describe how information systems can help managers
          make better business decisions.
        </p>


        <div className="lecture-key-point">

          <strong>
            Revision Tip
          </strong>

          <p>
            Focus on understanding how technology, information
            and business processes work together within an
            organisation.
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

export default InformationSystemsPaper2