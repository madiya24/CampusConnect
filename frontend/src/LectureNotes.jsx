import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'


function LectureNotes() {


  const [selectedTopic, setSelectedTopic] = useState(null)
  const lectureNotesRef = useRef(null)


  // Show selected lecture notes and scroll down to them
  const showLectureNotes = (topic) => {
    setSelectedTopic(topic)

    setTimeout(() => {
      lectureNotesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }, 100)
  }


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
            onClick={() => showLectureNotes('introduction')}
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
            onClick={() => showLectureNotes('variables')}
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
            onClick={() => showLectureNotes('conditions')}
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
            onClick={() => showLectureNotes('loops')}
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
            onClick={() => showLectureNotes('methods')}
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
            onClick={() => showLectureNotes('oop')}
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



        {/* =====================================================
            LECTURE NOTES DETAILS
        ===================================================== */}


        {/* Topic 1 */}
        {selectedTopic === 'introduction' && (


          <div
            className="actual-lecture-notes"
            ref={lectureNotesRef}
          >


            <p className="lecture-small-label">
              TOPIC 01
            </p>


            <h2>
              Introduction to Programming
            </h2>


            <p>
              Programming is the process of creating instructions that
              tell a computer how to perform a specific task or solve
              a particular problem.
            </p>


            <h3>
              What is a Program?
            </h3>


            <p>
              A program is a collection of instructions written in a
              programming language. The computer follows these
              instructions to perform tasks such as calculating values,
              processing information or displaying content to a user.
            </p>


            <h3>
              What is Programming?
            </h3>


            <p>
              Programming involves analysing a problem, designing a
              solution and writing instructions that a computer can
              understand and execute.
            </p>


            <h3>
              Programming Languages
            </h3>


            <p>
              Programming languages provide a way for developers to
              communicate instructions to computers. Different languages
              are designed for different purposes.
            </p>


            <ul>
              <li>Java</li>
              <li>C#</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>Kotlin</li>
            </ul>


            <h3>
              Algorithms
            </h3>


            <p>
              An algorithm is a step-by-step procedure used to solve a
              problem or complete a task. Before writing code, developers
              often plan the steps that the program needs to follow.
            </p>


            <p>
              For example, an algorithm for calculating the average of
              three numbers could be:
            </p>


            <ol>
              <li>Get the first number.</li>
              <li>Get the second number.</li>
              <li>Get the third number.</li>
              <li>Add the three numbers together.</li>
              <li>Divide the result by three.</li>
              <li>Display the average.</li>
            </ol>


            <h3>
              Source Code
            </h3>


            <p>
              Source code is the human-readable code written by a
              programmer using a programming language.
            </p>


            <pre>
{`public class HelloWorld {

    public static void main(String[] args) {

        System.out.println("Hello, World!");

    }

}`}
            </pre>


            <h3>
              How a Program Works
            </h3>


            <p>
              A program generally follows a sequence of instructions.
              The computer receives input, processes the information
              according to the instructions and produces an output.
            </p>


            <div className="lecture-key-point">


              <strong>
                💡 Key Takeaway
              </strong>


              <p>
                Programming is not only about writing code. It is about
                understanding a problem, creating a logical solution and
                translating that solution into instructions that a
                computer can execute.
              </p>


            </div>


          </div>


        )}



        {/* Topic 2 */}
        {selectedTopic === 'variables' && (


          <div
            className="actual-lecture-notes"
            ref={lectureNotesRef}
          >


            <p className="lecture-small-label">
              TOPIC 02
            </p>


            <h2>
              Variables & Data Types
            </h2>


            <p>
              Variables are used to store information that a program
              can use and manipulate while it is running. A variable
              has a name and a data type that determines what kind of
              value it can store.
            </p>


            <h3>
              What is a Variable?
            </h3>


            <p>
              A variable is a named location in memory used to store
              data. The value stored in a variable can be used, changed
              or updated while the program is running.
            </p>


            <h3>
              Common Data Types
            </h3>


            <ul>
              <li>
                <strong>String</strong> – stores text or a sequence of characters.
              </li>

              <li>
                <strong>Integer</strong> – stores whole numbers.
              </li>

              <li>
                <strong>Double</strong> – stores numbers with decimal values.
              </li>

              <li>
                <strong>Boolean</strong> – stores either true or false.
              </li>
            </ul>


            <h3>
              Declaring a Variable
            </h3>


            <p>
              When declaring a variable, we specify its data type,
              give it a name and assign a value to it.
            </p>


            <pre>
{`String studentName = "Alex";
int age = 20;
double average = 75.5;
boolean registered = true;`}
            </pre>


            <h3>
              Changing a Variable
            </h3>


            <p>
              The value of a variable can be changed after it has
              been declared.
            </p>


            <pre>
{`int age = 20;

age = 21;`}
            </pre>


            <div className="lecture-key-point">


              <strong>
                Key Point
              </strong>


              <p>
                Variables allow programs to store and work with
                information. Choosing the correct data type helps
                ensure that the program handles data correctly.
              </p>


            </div>


          </div>


        )}



        {/* Topic 3 */}
        {selectedTopic === 'conditions' && (


          <div
            className="actual-lecture-notes"
            ref={lectureNotesRef}
          >


            <p className="lecture-small-label">
              TOPIC 03
            </p>


            <h2>
              Conditional Statements
            </h2>


            <p>
              Conditional statements allow a program to make decisions
              based on whether a particular condition is true or false.
              They are used when a program needs to choose between
              different actions depending on the situation.
            </p>


            <h3>
              What is a Condition?
            </h3>


            <p>
              A condition is an expression that produces either a
              <strong> true </strong> or <strong> false </strong> result.
              Conditions are commonly created using comparison operators.
            </p>


            <h3>
              Comparison Operators
            </h3>


            <ul>
              <li><strong>==</strong> – checks if two values are equal.</li>
              <li><strong>!=</strong> – checks if two values are not equal.</li>
              <li><strong>&gt;</strong> – checks if one value is greater than another.</li>
              <li><strong>&lt;</strong> – checks if one value is less than another.</li>
              <li><strong>&gt;=</strong> – checks if one value is greater than or equal to another.</li>
              <li><strong>&lt;=</strong> – checks if one value is less than or equal to another.</li>
            </ul>


            <h3>
              If Statement
            </h3>


            <p>
              An if statement executes a block of code only when the
              specified condition is true.
            </p>


            <pre>
{`int age = 20;

if (age >= 18) {
    System.out.println("You are an adult.");
}`}
            </pre>


            <p>
              In this example, the message will only be displayed if
              the value of <strong>age</strong> is greater than or equal
              to 18.
            </p>


            <h3>
              If / Else Statement
            </h3>


            <p>
              An if/else statement provides two possible paths. If the
              condition is true, the code inside the if block runs.
              Otherwise, the code inside the else block runs.
            </p>


            <pre>
{`int mark = 65;

if (mark >= 50) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}`}
            </pre>


            <h3>
              Else If Statement
            </h3>


            <p>
              The else if statement is used when a program needs to
              check more than one condition.
            </p>


            <pre>
{`int mark = 75;

if (mark >= 75) {
    System.out.println("Distinction");
} else if (mark >= 50) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}`}
            </pre>


            <h3>
              Logical Operators
            </h3>


            <p>
              Logical operators are used to combine multiple conditions
              in a program.
            </p>


            <ul>
              <li>
                <strong>&amp;&amp;</strong> – AND: both conditions must be true.
              </li>

              <li>
                <strong>||</strong> – OR: at least one condition must be true.
              </li>

              <li>
                <strong>!</strong> – NOT: reverses the result of a condition.
              </li>
            </ul>


            <pre>
{`int age = 20;
boolean student = true;

if (age >= 18 && student) {
    System.out.println("Adult student");
}`}
            </pre>


            <h3>
              Why Conditional Statements Are Important
            </h3>


            <ul>
              <li>Allow programs to make decisions.</li>
              <li>Control which instructions are executed.</li>
              <li>Allow programs to respond to different situations.</li>
              <li>Make programs more flexible and interactive.</li>
            </ul>


            <div className="lecture-key-point">


              <strong>
                💡 Key Takeaway
              </strong>


              <p>
                Conditional statements control the flow of a program by
                allowing it to make decisions. The program evaluates a
                condition and executes the appropriate block of code
                depending on whether the condition is true or false.
              </p>


            </div>


          </div>


        )}



        {/* Topic 4 */}
        {selectedTopic === 'loops' && (


          <div
            className="actual-lecture-notes"
            ref={lectureNotesRef}
          >


            <p className="lecture-small-label">
              TOPIC 04
            </p>


            <h2>
              Loops
            </h2>


            <p>
              Loops are programming structures that allow a block of
              instructions to be repeated multiple times. They are useful
              when the same task needs to be performed repeatedly.
            </p>


            <h3>
              Why Use Loops?
            </h3>


            <p>
              Without loops, a programmer would need to write the same
              instructions repeatedly. Loops make programs shorter,
              easier to understand and more efficient.
            </p>


            <h3>
              Types of Loops
            </h3>


            <p>
              Common loops used in programming include:
            </p>


            <ul>
              <li><strong>For loop</strong> – used when the number of repetitions is known.</li>
              <li><strong>While loop</strong> – used while a condition remains true.</li>
              <li><strong>Do-while loop</strong> – executes the code at least once before checking the condition.</li>
            </ul>


            <h3>
              For Loop
            </h3>


            <p>
              A for loop is commonly used when you know how many times
              you want to repeat a block of code.
            </p>


            <pre>
{`for (int i = 0; i < 5; i++) {
    System.out.println(i);
}`}
            </pre>


            <p>
              This loop starts with <strong>i = 0</strong>. The condition
              checks whether <strong>i</strong> is less than 5. After each
              repetition, <strong>i</strong> is increased by 1.
            </p>


            <h3>
              While Loop
            </h3>


            <p>
              A while loop repeats a block of code as long as its
              condition remains true.
            </p>


            <pre>
{`int count = 0;

while (count < 5) {
    System.out.println(count);
    count++;
}`}
            </pre>


            <p>
              The condition is checked before each repetition. When the
              condition becomes false, the loop stops.
            </p>


            <h3>
              Do-While Loop
            </h3>


            <p>
              A do-while loop is similar to a while loop, but the code
              inside the loop executes at least once before the condition
              is checked.
            </p>


            <pre>
{`int number = 1;

do {
    System.out.println(number);
    number++;
} while (number <= 5);`}
            </pre>


            <h3>
              Loop Counter
            </h3>


            <p>
              A loop counter is a variable used to keep track of how many
              times a loop has executed.
            </p>


            <pre>
{`for (int i = 1; i <= 10; i++) {
    System.out.println("Number: " + i);
}`}
            </pre>


            <h3>
              Infinite Loops
            </h3>


            <p>
              An infinite loop occurs when the condition of a loop never
              becomes false. This causes the program to continue repeating
              the instructions.
            </p>


            <pre>
{`int count = 0;

while (count < 5) {
    System.out.println(count);
    count++;
}`}
            </pre>


            <p>
              It is important to make sure that the condition of a loop
              can eventually become false.
            </p>


            <h3>
              When to Use Each Loop
            </h3>


            <ul>
              <li>
                Use a <strong>for loop</strong> when the number of repetitions
                is known.
              </li>

              <li>
                Use a <strong>while loop</strong> when repetition depends on
                a condition.
              </li>

              <li>
                Use a <strong>do-while loop</strong> when the code needs to
                execute at least once.
              </li>
            </ul>


            <div className="lecture-key-point">


              <strong>
                💡 Key Takeaway
              </strong>


              <p>
                Loops allow programmers to repeat instructions without
                writing the same code multiple times. Choosing the correct
                type of loop makes programs more efficient and easier to
                maintain.
              </p>


            </div>


          </div>


        )}



        {/* Topic 5 */}
        {selectedTopic === 'methods' && (


          <div
            className="actual-lecture-notes"
            ref={lectureNotesRef}
          >


            <p className="lecture-small-label">
              TOPIC 05
            </p>


            <h2>
              Functions & Methods
            </h2>


            <p>
              Functions and methods are reusable blocks of code designed
              to perform a specific task. They help programmers organise
              programs into smaller and more manageable sections.
            </p>


            <h3>
              What is a Method?
            </h3>


            <p>
              A method is a block of code that performs a particular task.
              Instead of writing the same instructions repeatedly, a
              programmer can place them inside a method and call the method
              whenever it is needed.
            </p>


            <h3>
              Why Use Methods?
            </h3>


            <ul>
              <li>Reduce repeated code.</li>
              <li>Make programs easier to understand.</li>
              <li>Improve code organisation.</li>
              <li>Make code reusable.</li>
              <li>Make programs easier to maintain.</li>
              <li>Make large programs easier to divide into smaller tasks.</li>
            </ul>


            <h3>
              Creating a Method
            </h3>


            <p>
              A method can have a return type, a name, parameters and a
              block of code.
            </p>


            <pre>
{`public static int add(int a, int b) {
    return a + b;
}`}
            </pre>


            <h3>
              Calling a Method
            </h3>


            <p>
              After creating a method, we can call it from another part
              of the program.
            </p>


            <pre>
{`int result = add(5, 3);

System.out.println(result);`}
            </pre>


            <p>
              The values <strong>5</strong> and <strong>3</strong> are passed
              to the method as arguments. The method adds them together
              and returns the result.
            </p>


            <h3>
              Parameters
            </h3>


            <p>
              Parameters are values that a method receives when it is
              called. They allow a method to work with different values.
            </p>


            <pre>
{`public static void greet(String name) {
    System.out.println("Hello " + name);
}`}
            </pre>


            <p>
              The method above accepts a String parameter called
              <strong> name</strong>.
            </p>


            <h3>
              Return Values
            </h3>


            <p>
              A method can return a value after completing its task.
              The return type specifies the type of value that the method
              returns.
            </p>


            <pre>
{`public static int multiply(int a, int b) {
    return a * b;
}`}
            </pre>


            <p>
              In this example, the method returns an integer because its
              return type is <strong>int</strong>.
            </p>


            <h3>
              Void Methods
            </h3>


            <p>
              A method with a return type of <strong>void</strong> does not
              return a value.
            </p>


            <pre>
{`public static void displayMessage() {
    System.out.println("Welcome to CampusConnect!");
}`}
            </pre>


            <h3>
              Method Advantages
            </h3>


            <ul>
              <li>Code can be reused.</li>
              <li>Programs become easier to read.</li>
              <li>Problems can be divided into smaller tasks.</li>
              <li>Errors are easier to locate and fix.</li>
            </ul>


            <div className="lecture-key-point">


              <strong>
                💡 Key Takeaway
              </strong>


              <p>
                Methods help programmers create organised and reusable
                code. Instead of placing all instructions inside one large
                program, tasks can be separated into individual methods.
              </p>


            </div>


          </div>


        )}



        {/* Topic 6 */}
        {selectedTopic === 'oop' && (


          <div
            className="actual-lecture-notes"
            ref={lectureNotesRef}
          >


            <p className="lecture-small-label">
              TOPIC 06
            </p>


            <h2>
              Object-Oriented Programming
            </h2>


            <p>
              Object-Oriented Programming, commonly known as OOP, is a
              programming approach that organises software around objects
              and classes. OOP helps developers create programs that are
              easier to organise, reuse and maintain.
            </p>


            <h3>
              What is a Class?
            </h3>


            <p>
              A class is a blueprint or template used to create objects.
              It defines the data and behaviours that objects created from
              the class can have.
            </p>


            <pre>
{`class Student {

    String name;
    int age;

}`}
            </pre>


            <h3>
              What is an Object?
            </h3>


            <p>
              An object is an instance of a class. It represents something
              that can have its own data and behaviours.
            </p>


            <pre>
{`Student student1 = new Student();

student1.name = "Alex";
student1.age = 20;`}
            </pre>


            <h3>
              Attributes
            </h3>


            <p>
              Attributes are variables that belong to a class. They
              describe the characteristics or properties of an object.
            </p>


            <pre>
{`class Student {

    String name;
    int age;
}`}
            </pre>


            <p>
              In this example, <strong>name</strong> and <strong>age</strong>
              are attributes of the Student class.
            </p>


            <h3>
              Methods in Classes
            </h3>


            <p>
              Methods define behaviours or actions that an object can
              perform.
            </p>


            <pre>
{`class Student {

    String name;

    void study() {
        System.out.println("Student is studying");
    }
}`}
            </pre>


            <h3>
              Encapsulation
            </h3>


            <p>
              Encapsulation is the practice of keeping an object's data
              protected and controlling access to that data through
              methods.
            </p>


            <pre>
{`class Student {

    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}`}
            </pre>


            <h3>
              Inheritance
            </h3>


            <p>
              Inheritance allows one class to inherit properties and
              methods from another class. This helps reduce duplicated
              code and allows classes to build upon existing functionality.
            </p>


            <pre>
{`class Person {

    String name;

}

class Student extends Person {

    int studentNumber;

}`}
            </pre>


            <p>
              In this example, the Student class inherits the
              <strong> name </strong> attribute from the Person class.
            </p>


            <h3>
              Polymorphism
            </h3>


            <p>
              Polymorphism allows objects to behave differently while
              using the same method or interface. It allows a program to
              work with different types of objects in a flexible way.
            </p>


            <h3>
              Main OOP Concepts
            </h3>


            <ul>
              <li>
                <strong>Classes</strong> – blueprints used to create objects.
              </li>

              <li>
                <strong>Objects</strong> – instances of classes.
              </li>

              <li>
                <strong>Encapsulation</strong> – protects and controls access to data.
              </li>

              <li>
                <strong>Inheritance</strong> – allows classes to inherit functionality.
              </li>

              <li>
                <strong>Polymorphism</strong> – allows objects to behave in different ways.
              </li>
            </ul>


            <div className="lecture-key-point">


              <strong>
                💡 Key Takeaway
              </strong>


              <p>
                Object-oriented programming organises programs around
                classes and objects. The main concepts of OOP include
                encapsulation, inheritance and polymorphism. These
                concepts help developers create structured, reusable
                and maintainable software.
              </p>


            </div>


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