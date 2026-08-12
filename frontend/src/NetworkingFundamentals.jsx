import { Link } from 'react-router-dom'

function NetworkingFundamentals() {
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
          NETWORKING FUNDAMENTALS
        </p>

        <h1>
          Build your networking
          <span>knowledge.</span>
        </h1>

        <p>
          Review important networking concepts including IP addressing,
          network devices, protocols and the OSI model.
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
            Networking Fundamentals
          </h2>

          <p>
            These study notes cover the basic concepts you need to
            understand how computer networks communicate and how
            different networking technologies work together.
          </p>

        </div>


        {/* Topics */}
        <div className="lecture-notes-grid">

          <div className="lecture-note-card">

            <span className="lecture-number">
              01
            </span>

            <h3>
              Network Fundamentals
            </h3>

            <p>
              Understand what computer networks are, why they are
              used and how devices communicate with one another.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              02
            </span>

            <h3>
              Network Devices
            </h3>

            <p>
              Learn about routers, switches, access points, hubs
              and other devices used to build computer networks.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              03
            </span>

            <h3>
              IP Addressing
            </h3>

            <p>
              Review IPv4 addresses, subnet masks, private and
              public addresses and basic network addressing.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              04
            </span>

            <h3>
              Network Protocols
            </h3>

            <p>
              Learn how protocols such as TCP, UDP, HTTP, DNS
              and DHCP help devices communicate across networks.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              05
            </span>

            <h3>
              OSI Model
            </h3>

            <p>
              Understand the seven layers of the OSI model and
              the role each layer plays in network communication.
            </p>

          </div>


          <div className="lecture-note-card">

            <span className="lecture-number">
              06
            </span>

            <h3>
              Network Security
            </h3>

            <p>
              Review basic concepts such as firewalls, encryption,
              authentication and secure network communication.
            </p>

          </div>

        </div>


        {/* Study Box */}
        <div className="lecture-study-box">

          <div>

            <p className="lecture-small-label">
              STUDY MATERIAL
            </p>

            <h2>
              Networking Study Guide
            </h2>

            <p>
              Use these topics to revise the fundamentals of
              computer networking and prepare for assessments.
            </p>

          </div>

          <div className="lecture-study-icon">
            🌐
          </div>

        </div>


        {/* Key Point */}
        <div className="lecture-key-point">

          <strong>
            Study Tip
          </strong>

          <p>
            Start by understanding the OSI model and basic network
            devices. Once these concepts are clear, IP addressing
            and network protocols become much easier to understand.
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

export default NetworkingFundamentals