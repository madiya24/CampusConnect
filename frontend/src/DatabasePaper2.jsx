import { Link } from 'react-router-dom'

function DatabasePaper2() {
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
          Examination
        </h1>

        <p>
          Database Systems practice examination covering SQL,
          database design, relationships and normalisation.
        </p>

      </section>


      {/* Paper Information */}
      <section className="past-paper-content">

        <div className="past-paper-info">

          <div>
            <strong>Duration</strong>
            <span>2 Hours</span>
          </div>

          <div>
            <strong>Total Marks</strong>
            <span>100 Marks</span>
          </div>

          <div>
            <strong>Type</strong>
            <span>Practice Examination</span>
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
            <li>Clearly identify primary and foreign keys where required.</li>
            <li>Show all necessary working for database design questions.</li>
          </ul>

        </div>


        {/* Question 1 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 1 — 10 MARKS
          </span>

          <h3>
            Database Concepts
          </h3>

          <p>
            Explain the purpose of a Database Management System (DBMS).
            Your answer should include two advantages and two disadvantages
            of using a DBMS.
          </p>

          <p>
            Give two examples of database management systems commonly
            used by organisations.
          </p>

        </div>


        {/* Question 2 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 2 — 12 MARKS
          </span>

          <h3>
            Database Design
          </h3>

          <p>
            A university stores information about students and the
            modules they register for.
          </p>

          <pre>
{`STUDENT
--------------------------------
StudentID
FirstName
Surname
Email
Course

MODULE
--------------------------------
ModuleID
ModuleName
Credits`}
          </pre>

          <p>
            a) Identify the primary key for each table.
          </p>

          <p>
            b) Explain how the two tables could be related.
          </p>

          <p>
            c) Identify the foreign key that would be required.
          </p>

        </div>


        {/* Question 3 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 3 — 12 MARKS
          </span>

          <h3>
            SQL SELECT Statements
          </h3>

          <p>
            Consider the following Student table:
          </p>

          <pre>
{`Student
--------------------------------
StudentID | FirstName | Surname | Course | Year
1         | Sarah     | Smith   | IT     | 2
2         | John      | Brown   | CS     | 1
3         | Maria     | Jones   | IT     | 3
4         | David     | White   | IS     | 2
5         | Peter     | Adams   | CS     | 3`}
          </pre>

          <p>
            Write an SQL statement to display all students.
          </p>

          <p>
            Write an SQL statement to display only the FirstName
            and Surname columns.
          </p>

          <p>
            Write an SQL statement to display students who are
            in Year 3.
          </p>

        </div>


        {/* Question 4 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 4 — 12 MARKS
          </span>

          <h3>
            SQL Filtering and Sorting
          </h3>

          <p>
            Using the Student table from Question 3, write an SQL
            query to display all students studying Computer Science.
          </p>

          <p>
            Write an SQL query to display students whose surname
            is "Smith".
          </p>

          <p>
            Write an SQL query that displays all students ordered
            by their surname in ascending order.
          </p>

        </div>


        {/* Question 5 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 5 — 14 MARKS
          </span>

          <h3>
            SQL JOIN
          </h3>

          <p>
            Consider the following two tables:
          </p>

          <pre>
{`STUDENT
--------------------------------
StudentID | FirstName | Surname
1         | Sarah     | Smith
2         | John      | Brown
3         | Maria     | Jones

ENROLMENT
--------------------------------
StudentID | ModuleID
1         | DB101
2         | CS101
3         | DB101

MODULE
--------------------------------
ModuleID | ModuleName
DB101    | Database Systems
CS101    | Programming Fundamentals`}
          </pre>

          <p>
            Write an SQL query using JOIN to display each student's
            first name together with the module name they are enrolled in.
          </p>

          <p>
            Explain why a JOIN is useful when working with related tables.
          </p>

        </div>


        {/* Question 6 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 6 — 14 MARKS
          </span>

          <h3>
            Normalisation
          </h3>

          <p>
            Explain the purpose of database normalisation.
          </p>

          <p>
            Describe the purpose of First Normal Form (1NF).
          </p>

          <p>
            Explain one problem that can occur when a database
            contains unnecessary duplicate data.
          </p>

        </div>


        {/* Question 7 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 7 — 12 MARKS
          </span>

          <h3>
            Primary and Foreign Keys
          </h3>

          <p>
            Explain the difference between a primary key and
            a foreign key.
          </p>

          <p>
            Consider the following tables:
          </p>

          <pre>
{`CUSTOMER
--------------------------------
CustomerID
Name
Email

ORDER
--------------------------------
OrderID
OrderDate
CustomerID`}
          </pre>

          <p>
            Identify the primary key in each table and identify
            the foreign key in the ORDER table.
          </p>

        </div>


        {/* Question 8 */}
        <div className="past-question">

          <span className="question-number">
            QUESTION 8 — 14 MARKS
          </span>

          <h3>
            Database Scenario
          </h3>

          <p>
            A university wants to create a database to manage
            student registrations. Each student can register for
            multiple modules, while each module can have multiple
            students.
          </p>

          <p>
            Design the main tables that would be required for this
            system and identify the primary and foreign keys.
          </p>

          <p>
            Explain how your design would represent the relationship
            between students and modules.
          </p>

        </div>


        {/* Key Point */}
        <div className="past-paper-key-point">

          <strong>
            Study Tip
          </strong>

          <p>
            Before attempting advanced SQL questions, make sure you
            understand tables, primary keys, foreign keys and
            relationships. These concepts form the foundation of
            database design.
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

export default DatabasePaper2