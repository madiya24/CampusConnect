import { Link } from 'react-router-dom'
import { useState } from 'react'

function Announcements() {

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null)

  const announcements = [
    {
      id: 1,
      day: '12',
      month: 'AUG',
      category: 'Important',
      categoryClass: 'important',
      title: 'Student Registration Deadline',
      description:
        'Students are reminded to complete their registration before the deadline. Please ensure that all required modules and personal information have been confirmed.',
      details:
        'All students are encouraged to complete their registration as soon as possible. Please check that your selected modules are correct and that all personal information is up to date. Students who experience any registration problems should contact the relevant university department for assistance.'
    },

    {
      id: 2,
      day: '15',
      month: 'AUG',
      category: 'Academic',
      categoryClass: 'academic',
      title: 'Examination Timetable Available',
      description:
        'The examination timetable is now available. Students should review their examination dates, times and venues and report any issues to the relevant department.',
      details:
        'The examination timetable has been released and students should carefully review their examination dates, times and venues. If you notice any issues or conflicts with your timetable, please contact the relevant academic department as soon as possible.'
    },

    {
      id: 3,
      day: '18',
      month: 'AUG',
      category: 'Campus',
      categoryClass: 'campus',
      title: 'Library Operating Hours Updated',
      description:
        'The campus library will have updated operating hours during the upcoming examination period. Students are encouraged to plan their study sessions accordingly.',
      details:
        'During the upcoming examination period, the campus library will operate according to updated opening and closing times. Students are encouraged to check the latest operating hours before visiting the library and plan their study sessions accordingly.'
    },

    {
      id: 4,
      day: '22',
      month: 'AUG',
      category: 'Events',
      categoryClass: 'event',
      title: 'Student Orientation Session',
      description:
        'New students are invited to attend the upcoming orientation session. The session will introduce students to campus facilities, services and resources.',
      details:
        'The student orientation session is designed to help new students become familiar with the university environment. Students will be introduced to campus facilities, student services, academic resources and other important information that can help them settle into university life.'
    }
  ]

  const filteredAnnouncements =
    selectedCategory === 'All'
      ? announcements
      : announcements.filter(
          (announcement) => announcement.category === selectedCategory
        )

  return (
    <div className="announcements-page">

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
      <section className="announcements-header">

        <p className="announcements-label">
          CAMPUS ANNOUNCEMENTS
        </p>

        <h1>
          Stay informed,
          <span>stay up to date.</span>
        </h1>

        <p>
          Keep up with important university news, academic updates,
          deadlines and information happening around campus.
        </p>

      </section>


      {/* Announcements */}
      <section className="announcements-section">

        <div className="announcements-top">

          <div>

            <h2>
              Latest Announcements
            </h2>

            <p>
              Important information from your university community.
            </p>

          </div>

        </div>


        {/* Announcement Categories */}
        <div className="announcement-categories">

          {['All', 'Academic', 'Important', 'Campus', 'Events'].map(
            (category) => (

              <button
                key={category}
                className={`announcement-category ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>

            )
          )}

        </div>


        {/* Announcement List */}
        <div className="announcements-list">

          {filteredAnnouncements.map((announcement) => (

            <article
              className="announcement-card"
              key={announcement.id}
            >

              {/* Date */}
              <div className="announcement-date">

                <strong>
                  {announcement.day}
                </strong>

                <span>
                  {announcement.month}
                </span>

              </div>


              {/* Content */}
              <div className="announcement-content">

                <span
                  className={`announcement-category-label ${announcement.categoryClass}`}
                >
                  {announcement.category.toUpperCase()}
                </span>

                <h3>
                  {announcement.title}
                </h3>

                <p>
                  {announcement.description}
                </p>


              </div>

            </article>

          ))}

        </div>


        {/* Message when no announcements are found */}
        {filteredAnnouncements.length === 0 && (

          <p className="no-announcements">
            No announcements available for this category.
          </p>

        )}


        {/* Back */}
        <div className="announcements-footer">

          <Link
            to="/features"
            className="back-link"
          >
            ← Back to Features
          </Link>

        </div>

      </section>


      {/* Announcement Details Popup */}
      {selectedAnnouncement && (

        <div className="announcement-overlay">

          <div className="announcement-modal">

            <button
              className="close-announcement"
              onClick={() => setSelectedAnnouncement(null)}
            >
              ×
            </button>


            <span
              className={`announcement-category-label ${selectedAnnouncement.categoryClass}`}
            >
              {selectedAnnouncement.category.toUpperCase()}
            </span>


            <h2>
              {selectedAnnouncement.title}
            </h2>


            <div className="announcement-modal-date">

              {selectedAnnouncement.day}{' '}
              {selectedAnnouncement.month}

            </div>


            <p>
              {selectedAnnouncement.details}
            </p>


            <button
              className="announcement-close-button"
              onClick={() => setSelectedAnnouncement(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  )
}

export default Announcements