import { useState } from 'react'
import { Link } from 'react-router-dom'

function Resources() {

  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const resources = [
  {
    id: 1,
    icon: '📖',
    type: 'LECTURE NOTES',
    title: 'Programming Fundamentals',
    description:
      'Review key programming concepts, algorithms, variables, loops and object-oriented programming.',
    subject: 'Computer Science',
    format: 'PDF',
    link: '/resources/programming'
  },

  {
    id: 2,
    icon: '📝',
    type: 'PAST PAPERS',
    title: 'Database Systems',
    description:
      'Practice with previous database assessment questions covering SQL, relationships, normalisation and queries.',
    subject: 'Information Systems',
    format: 'PDF',
    link: '/resources/database'
  },

  {
    id: 3,
    icon: '📚',
    type: 'STUDY GUIDE',
    title: 'Networking Fundamentals',
    description:
      'Learn about networking concepts including IP addressing, protocols, network devices and the OSI model.',
    subject: 'Networking',
    format: 'PDF',
    link: '/resources/networking'
  },

  {
    id: 4,
    icon: '💻',
    type: 'TUTORIAL',
    title: 'Web Development',
    description:
      'Explore HTML, CSS, JavaScript and modern web development concepts through practical learning materials.',
    subject: 'Web Development',
    format: 'Tutorial',
    link: '/resources/web-development'
  },

  {
    id: 5,
    icon: '🗂️',
    type: 'STUDY GUIDE',
    title: 'Software Development',
    description:
      'Helpful material covering software development methodologies, testing and project management.',
    subject: 'Software Engineering',
    format: 'PDF',
    link: '/resources/software-development'
  },

  {
    id: 6,
    icon: '📊',
    type: 'PAST PAPERS',
    title: 'Information Systems',
    description:
      'Practice questions and revision material to help prepare for information systems assessments.',
    subject: 'Information Systems',
    format: 'PDF',
    link: '/resources/information-systems'
  }
]
  

  const filteredResources =
    selectedCategory === 'ALL'
      ? resources
      : resources.filter(
          resource => resource.type === selectedCategory
        )

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

          <button
            className={`resource-category ${
              selectedCategory === 'ALL' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('ALL')}
          >
            All Resources
          </button>


          <button
            className={`resource-category ${
              selectedCategory === 'LECTURE NOTES' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('LECTURE NOTES')}
          >
            Lecture Notes
          </button>


          <button
            className={`resource-category ${
              selectedCategory === 'PAST PAPERS' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('PAST PAPERS')}
          >
            Past Papers
          </button>


          <button
            className={`resource-category ${
              selectedCategory === 'STUDY GUIDE' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('STUDY GUIDE')}
          >
            Study Guides
          </button>


          <button
            className={`resource-category ${
              selectedCategory === 'TUTORIAL' ? 'active' : ''
            }`}
            onClick={() => setSelectedCategory('TUTORIAL')}
          >
            Tutorials
          </button>

        </div>


        {/* Resource Cards */}
        <div className="resources-grid">

          {filteredResources.map(resource => (

            <div
              className="resource-card"
              key={resource.id}
            >

              <div className="resource-icon">
                {resource.icon}
              </div>


              <span className="resource-type">
                {resource.type}
              </span>


              <h3>
                {resource.title}
              </h3>


              <p>
                {resource.description}
              </p>


              <div className="resource-meta">

                <span>
                  📚 {resource.subject}
                </span>

                <span>
                  📄 {resource.format}
                </span>

              </div>


              <Link
                  to={resource.link}
                  className="resource-button"
                >
                  View Resource →
              </Link>
            </div>

          ))}

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