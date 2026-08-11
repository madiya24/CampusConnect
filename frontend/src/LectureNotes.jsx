import { useState } from 'react'
import { Link } from 'react-router-dom'

function LectureNotes() {

  const [selectedTopic, setSelectedTopic] = useState(null)

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

          <Link to="/resources">
            Resources
          </Link>

          <Link to="/#about">
            About
          </Link>

        </div>

      </nav>


      {/* Header */}
      <section className="lecture-notes-header">

        <p className="lecture-notes-label">
          PROGRAMMING FUNDAMENTALS
        </p>

        <h1>
          Lecture
          <span>Notes</span>
        </h1>

        <p>
          Review the essential programming concepts you need
          to build a strong foundation in software development.
        </p>

      </section>


      {/* Content */}
      <section className="lecture-notes-content">

        {/* Introduction */}
        <div className="lecture-introduction">

          <p className="lecture-small-label">
            MODULE OVERVIEW
          </p>

          <h2>
            Programming Fundamentals
          </h2>

          <p>
            These lecture notes cover the fundamental concepts
            of programming. They are designed to help students
            understand how programs are structured, how data is
            handled and how problems can be solved using code.
          </p>

        </div>


        {/* Topics */}
        <div className="lecture-notes-grid">


          {/* Topic 1 */}
          <button
            className={`lecture-note-card ${
              selectedTopic === 'introduction'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTopic('introduction')}
          >

            <span className="lecture-number">
              01
            </span>

            <h3>
              Introduction to Programming
            </h3>

            <p>
              Understand what programming is, how programs work
              and the role of programming languages in software
              development.
            </p>

            <span className="topic-link">
              View Notes →
            </span>

          </button>


          {/* Topic 2 */}
          <button
            className={`lecture-note-card ${
              selectedTopic === 'variables'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTopic('variables')}
          >

            <span className="lecture-number">
              02
            </span>

            <h3>
              Variables & Data Types
            </h3>

            <p>
              Learn how variables store information and explore
              common data types such as strings, integers,
              decimals and Boolean values.
            </p>

            <span className="topic-link">
              View Notes →
            </span>

          </button>


          {/* Topic 3 */}
          <button
            className={`lecture-note-card ${
              selectedTopic === 'conditions'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTopic('conditions')}
          >

            <span className="lecture-number">
              03
            </span>

            <h3>
              Conditional Statements
            </h3>

            <p>
              Learn how programs make decisions using conditions,
              including if, else if and else.
            </p>

            <span className="topic-link">
              View Notes →
            </span>

          </button>


          {/* Topic 4 */}
          <button
            className={`lecture-note-card ${
              selectedTopic === 'loops'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTopic('loops')}
          >

            <span className="lecture-number">
              04
            </span>

            <h3>
              Loops
            </h3>

            <p>
              Understand how loops allow programs to repeat
              instructions efficiently.
            </p>

            <span className="topic-link">
              View Notes →
            </span>

          </button>


          {/* Topic 5 */}
          <button
            className={`lecture-note-card ${
              selectedTopic === 'methods'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTopic('methods')}
          >

            <span className="lecture-number">
              05
            </span>

            <h3>
              Functions & Methods
            </h3>

            <p>
              Learn how functions and methods help organise
              code into reusable blocks.
            </p>

            <span className="topic-link">
              View Notes →
            </span>

          </button>


          {/* Topic 6 */}
          <button
            className={`lecture-note-card ${
              selectedTopic === 'oop'
                ? 'selected'
                : ''
            }`}
            onClick={() => setSelectedTopic('oop')}
          >

            <span className="lecture-number">
              06
            </span>

            <h3>
              Object-Oriented Programming
            </h3>

            <p>
              Explore classes, objects and the basic principles
              of object-oriented programming.
            </p>

            <span className="topic-link">
              View Notes →
            </span>

          </button>

        </div>


        {/* Actual Notes */}

        {selectedTopic === 'introduction' && (

          <div className="actual-lecture-notes">

            <p className="lecture-small-label">
              TOPIC 01
            </p>

            <h2>
              Introduction to Programming
            </h2>

            <p>
              Programming is the process of creating instructions
              that tell a computer how to perform a task.
            </p>

            <h3>
              What is a Program?
            </h3>

            <p>
              A program is a collection of instructions written
              in a programming language. These instructions are
              executed by a computer to perform a specific task
              or solve a problem.
            </p>

            <h3>
              Programming Languages
            </h3>

            <p>
              Programming languages allow developers to communicate
              instructions to computers. Examples include Java,
              C#, Python, JavaScript and Kotlin.
            </p>

            <h3>
              Key Concepts
            </h3>

            <ul>
              <li>Problem solving</li>
              <li>Algorithms</li>
              <li>Source code</li>
              <li>Programming languages</li>
              <li>Software development</li>
            </ul>

          </div>

        )}


        {selectedTopic === 'variables' && (

          <div className="actual-lecture-notes">

            <p className="lecture-small-label">
              TOPIC 02
            </p>

            <h2>
              Variables & Data Types
            </h2>

            <p>
              Variables are used to store information that a
              program can use and manipulate while it is running.
            </p>

            <h3>
              Common Data Types
            </h3>

            <ul>
              <li><strong>String</strong> – stores text.</li>
              <li><strong>Integer</strong> – stores whole numbers.</li>
              <li><strong>Double</strong> – stores decimal numbers.</li>
              <li><strong>Boolean</strong> – stores true or false.</li>
            </ul>

            <h3>
              Example
            </h3>

            <pre>
{`String studentName = "Alex";
int age = 20;
double average = 75.5;
boolean registered = true;`}
            </pre>

          </div>

        )}


        {selectedTopic === 'conditions' && (

          <div className="actual-lecture-notes">

            <p className="lecture-small-label">
              TOPIC 03
            </p>

            <h2>
              Conditional Statements
            </h2>

            <p>
              Conditional statements allow a program to make
              decisions based on whether a condition is true
              or false.
            </p>

            <h3>
              If Statement
            </h3>

            <pre>
{`if (age >= 18) {
    System.out.println("You are an adult.");
}`}
            </pre>

            <h3>
              If / Else
            </h3>

            <pre>
{`if (mark >= 50) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}`}
            </pre>

          </div>

        )}


        {selectedTopic === 'loops' && (

          <div className="actual-lecture-notes">

            <p className="lecture-small-label">
              TOPIC 04
            </p>

            <h2>
              Loops
            </h2>

            <p>
              Loops are used when we need to repeat a block of
              instructions multiple times.
            </p>

            <h3>
              For Loop
            </h3>

            <pre>
{`for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`}
            </pre>

            <h3>
              While Loop
            </h3>

            <pre>
{`while (count < 5) {
    count++;
}`}
            </pre>

          </div>

        )}


        {selectedTopic === 'methods' && (

          <div className="actual-lecture-notes">

            <p className="lecture-small-label">
              TOPIC 05
            </p>

            <h2>
              Functions & Methods
            </h2>

            <p>
              Methods are reusable blocks of code designed to
              perform a specific task.
            </p>

            <h3>
              Why Use Methods?
            </h3>

            <ul>
              <li>Reduce repeated code</li>
              <li>Make programs easier to understand</li>
              <li>Improve code organisation</li>
              <li>Make code reusable</li>
            </ul>

            <h3>
              Example
            </h3>

            <pre>
{`public static int add(int a, int b) {
    return a + b;
}`}
            </pre>

          </div>

        )}


        {selectedTopic === 'oop' && (

          <div className="actual-lecture-notes">

            <p className="lecture-small-label">
              TOPIC 06
            </p>

            <h2>
              Object-Oriented Programming
            </h2>

            <p>
              Object-oriented programming, commonly called OOP,
              is a programming approach based on objects and
              classes.
            </p>

            <h3>
              Important OOP Concepts
            </h3>

            <ul>
              <li>Classes</li>
              <li>Objects</li>
              <li>Encapsulation</li>
              <li>Inheritance</li>
              <li>Polymorphism</li>
            </ul>

            <h3>
              Example
            </h3>

            <pre>
{`class Student {
    String name;

    void study() {
        System.out.println("Student is studying");
    }
}`}
            </pre>

          </div>

        )}


        {/* Study Reminder */}
        <div className="lecture-study-box">

          <div>

            <p className="lecture-small-label">
              STUDY TIP
            </p>

            <h2>
              Don't just read the notes.
            </h2>

            <p>
              Try writing small programs while studying each
              topic. Practising the concepts will help you
              understand how they work in real applications.
            </p>

          </div>

          <div className="lecture-study-icon">
            💻
          </div>

        </div>


        {/* Back */}
        <div className="lecture-notes-footer">

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

export default LectureNotes