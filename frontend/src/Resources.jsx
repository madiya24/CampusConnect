import { Link } from 'react-router-dom'

function Resources() {
  return (
    <div className="resources-page">

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


      {/* Resources Header */}
      <section className="resources-header">

        <p className="resources-label">
          STUDY RESOURCES
        </p>

        <h1>
          Learn smarter,
          <span>study better.</span>
        </h1>

        <p>
          Access useful academic materials and resources designed
          to help you stay organised and succeed in your studies.
        </p>

      </section>


      {/* Resources Section */}
      <section className="resources-section">

        <div className="resources-top">

          <div>
            <h2>
              Academic Resources
            </h2>

            <p>
              Find materials to support your learning and studies.
            </p>
          </div>

        </div>


        {/* Categories */}
        <div className="resource-categories">

          <button className="resource-category active">
            All Resources
          </button>

          <button className="resource-category">
            Lecture Notes
          </button>

          <button className="resource-category">
            Past Papers
          </button>

          <button className="resource-category">
            Study Guides
          </button>

          <button className="resource-category">
            Tutorials
          </button>

        </div>


        {/* Resource Cards */}
        <div className="resources-grid">


          {/* Resource 1 */}
          <div className="resource-card">

            <div className="resource-icon">
              📖
            </div>

            <span className="resource-type">
              LECTURE NOTES
            </span>

            <h3>
              Programming Fundamentals
            </h3>

            <p>
              Review key programming concepts, algorithms,
              variables, loops and object-oriented programming.
            </p>

            <div className="resource-meta">
              <span>📚 Computer Science</span>
              <span>📄 PDF</span>
            </div>

            <button className="resource-button">
              View Resource →
            </button>

          </div>


          {/* Resource 2 */}
          <div className="resource-card">

            <div className="resource-icon">
              📝
            </div>

            <span className="resource-type">
              PAST PAPERS
            </span>

            <h3>
              Database Systems
            </h3>

            <p>
              Practice with previous database assessment questions
              covering SQL, relationships, normalisation and queries.
            </p>

            <div className="resource-meta">
              <span>📚 Information Systems</span>
              <span>📄 PDF</span>
            </div>

            <button className="resource-button">
              View Resource →
            </button>

          </div>


          {/* Resource 3 */}
          <div className="resource-card">

            <div className="resource-icon">
              📚
            </div>

            <span className="resource-type">
              STUDY GUIDE
            </span>

            <h3>
              Networking Fundamentals
            </h3>

            <p>
              Learn about networking concepts including IP addressing,
              protocols, network devices and the OSI model.
            </p>

            <div className="resource-meta">
              <span>📚 Networking</span>
              <span>📄 PDF</span>
            </div>

            <button className="resource-button">
              View Resource →
            </button>

          </div>


          {/* Resource 4 */}
          <div className="resource-card">

            <div className="resource-icon">
              💻
            </div>

            <span className="resource-type">
              TUTORIAL
            </span>

            <h3>
              Web Development
            </h3>

            <p>
              Explore HTML, CSS, JavaScript and modern web development
              concepts through practical learning materials.
            </p>

            <div className="resource-meta">
              <span>📚 Web Development</span>
              <span>🎓 Tutorial</span>
            </div>

            <button className="resource-button">
              View Resource →
            </button>

          </div>


          {/* Resource 5 */}
          <div className="resource-card">

            <div className="resource-icon">
              🗂️
            </div>

            <span className="resource-type">
              STUDY GUIDE
            </span>

            <h3>
              Software Development
            </h3>

            <p>
              Helpful material covering software development
              methodologies, testing and project management.
            </p>

            <div className="resource-meta">
              <span>📚 Software Engineering</span>
              <span>📄 PDF</span>
            </div>

            <button className="resource-button">
              View Resource →
            </button>

          </div>


          {/* Resource 6 */}
          <div className="resource-card">

            <div className="resource-icon">
              📊
            </div>

            <span className="resource-type">
              PAST PAPERS
            </span>

            <h3>
              Information Systems
            </h3>

            <p>
              Practice questions and revision material to help
              prepare for information systems assessments.
            </p>

            <div className="resource-meta">
              <span>📚 Information Systems</span>
              <span>📄 PDF</span>
            </div>

            <button className="resource-button">
              View Resource →
            </button>

          </div>

        </div>


        {/* Back */}
        <div className="resources-footer">

          <Link
            to="/features"
            className="back-link"
          >
            ← Back to Features
          </Link>

        </div>

      </section>

    </div>
  )
}

export default Resources