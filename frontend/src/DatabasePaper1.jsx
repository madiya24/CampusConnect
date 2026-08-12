import { Link } from 'react-router-dom'

function DatabasePaper1() {
  return (
    <div className="past-paper-page">

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
      <section className="past-paper-header">

        <p className="past-paper-label">
          DATABASE SYSTEMS
        </p>

        <h1>
          Test 1
        </h1>

        <p>
          Database Systems practice past paper covering
          fundamental database concepts and SQL.
        </p>

      </section>


      {/* Paper Information */}
      <section className="past-paper-content">

        <div className="past-paper-info">

          <div>
            <strong>Duration</strong>
            <span>1 Hour</span>
          </div>

          <div>
            <strong>Total Marks</strong>
            <span>50 Marks</span>
          </div>

          <div>
            <strong>Type</strong>
            <span>Practice Test</span>
          </div>

        </div>


        {/* Instructions */}
        <div className="past-paper-section">

          <h2>
            Instructions
          </h2>

          <ul>
            <li>Answer all questions.</li>
            <li>Read each question carefully before answering.</li>
            <li>Write SQL statements using correct syntax.</li>
            <li>Show all necessary working where required.</li>
          </ul>

        </div>


        {/* Question 1 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 1 — 10 MARKS
          </span>

          <h3>
            Database Fundamentals
          </h3>

          <p>
            Explain what a database is and describe two advantages
            of using a database management system (DBMS).
          </p>

          <p>
            Give two examples of situations where a database would
            be useful.
          </p>

        </div>


        {/* Question 2 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 2 — 8 MARKS
          </span>

          <h3>
            Tables and Keys
          </h3>

          <p>
            Consider the following Student table:
          </p>

          <pre>
{`Student
--------------------------------
StudentID
FirstName
Surname
Email
Course`}
          </pre>

          <p>
            a) Identify the most appropriate primary key.
          </p>

          <p>
            b) Explain why a primary key is important.
          </p>

          <p>
            c) Explain what would happen if two students had
            the same StudentID.
          </p>

        </div>


        {/* Question 3 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 3 — 8 MARKS
          </span>

          <h3>
            Relationships
          </h3>

          <p>
            A university has students who register for modules.
            A student can register for many modules and a module
            can have many students.
          </p>

          <p>
            a) What type of relationship exists between Student
            and Module?
          </p>

          <p>
            b) Explain what a foreign key is.
          </p>

          <p>
            c) Explain how a many-to-many relationship can be
            represented in a relational database.
          </p>

        </div>


        {/* Question 4 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 4 — 8 MARKS
          </span>

          <h3>
            SQL Basics
          </h3>

          <p>
            Consider the following table:
          </p>

          <pre>
{`Student
--------------------------------
StudentID | FirstName | Surname | Course
1         | Sarah     | Smith   | IT
2         | John      | Brown   | CS
3         | Maria     | Jones   | IT
4         | David     | White   | IS`}
          </pre>

          <p>
            Write an SQL statement to display all students
            who are studying IT.
          </p>

          <p>
            Write another SQL statement to display the first name
            and surname of all students.
          </p>

        </div>


        {/* Question 5 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 5 — 8 MARKS
          </span>

          <h3>
            SQL Filtering
          </h3>

          <p>
            Using the Student table from Question 4, write an SQL
            query that displays students whose surname is "Brown".
          </p>

          <p>
            Then write an SQL query that displays all students
            ordered alphabetically by their surname.
          </p>

        </div>


        {/* Question 6 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 6 — 8 MARKS
          </span>

          <h3>
            Database Design
          </h3>

          <p>
            Explain the difference between a primary key and
            a foreign key.
          </p>

          <p>
            Give one example of how a foreign key can be used
            to connect two tables in a university database.
          </p>

        </div>


        {/* Key Point */}
        <div className="past-paper-key-point">

          <strong>
            Study Tip
          </strong>

          <p>
            Make sure you understand primary keys, foreign keys,
            relationships and basic SQL commands before moving
            on to more advanced database topics.
          </p>

        </div>


        {/* Back */}
        <div className="past-paper-footer">

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

export default DatabasePaper1