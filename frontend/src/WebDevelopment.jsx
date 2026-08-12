import { Link } from 'react-router-dom'

function WebDevelopment() {
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
          WEB DEVELOPMENT TUTORIAL
        </p>

        <h1>
          Learn how to build
          <span>for the web.</span>
        </h1>

        <p>
          Explore the fundamentals of web development through
          practical tutorials covering HTML, CSS, JavaScript
          and responsive design.
        </p>

      </section>


      {/* Content */}
      <section className="lecture-notes-content">

        {/* Introduction */}
        <div className="lecture-introduction">

          <p className="lecture-small-label">
            TUTORIAL GUIDE
          </p>

          <h2>
            Web Development
          </h2>

          <p>
            Learn the core technologies used to create modern
            websites. Work through each topic and build your
            understanding step by step.
          </p>

        </div>


        {/* Tutorial Topics */}
        <div className="lecture-notes-grid">

          <div className="lecture-note-card">

            <span className="lecture-number">
              01
            </span>

            <h3>
              HTML Fundamentals
            </h3>

            <p>
              Learn how HTML structures a webpage using elements,
              headings, paragraphs, links, images, lists and forms.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              02
            </span>

            <h3>
              CSS Fundamentals
            </h3>

            <p>
              Learn how CSS is used to style webpages, including
              colours, fonts, spacing, borders and layouts.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              03
            </span>

            <h3>
              JavaScript Basics
            </h3>

            <p>
              Understand variables, functions, conditions,
              events and basic JavaScript interaction.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              04
            </span>

            <h3>
              Responsive Design
            </h3>

            <p>
              Learn how to create websites that adapt to different
              screen sizes using responsive layouts and media queries.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              05
            </span>

            <h3>
              Forms and Validation
            </h3>

            <p>
              Learn how to create HTML forms and use JavaScript
              to validate information entered by users.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              06
            </span>

            <h3>
              Practical Web Project
            </h3>

            <p>
              Put your knowledge together by creating a simple
              responsive webpage using HTML, CSS and JavaScript.
            </p>

          </div>

        </div>


        {/* Tutorial Box */}
        <div className="lecture-study-box">

          <div>

            <p className="lecture-small-label">
              PRACTICAL TUTORIAL
            </p>

            <h2>
              Build Your First Webpage
            </h2>

            <p>
              Start with HTML to create the structure, use CSS
              to style your page and add JavaScript to make it
              interactive.
            </p>

          </div>

          <div className="lecture-study-icon">
            💻
          </div>

        </div>


        {/* Key Point */}
        <div className="lecture-key-point">

          <strong>
            Tutorial Tip
          </strong>

          <p>
            Don't try to learn everything at once. Start with HTML,
            then move to CSS and finally JavaScript. Practising by
            building small webpages is one of the best ways to
            understand web development.
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

export default WebDevelopment