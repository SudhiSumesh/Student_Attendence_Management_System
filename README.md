 ## Student Attendance Management System

This project is a web application that facilitates the management of student attendance according to the provided UI design. The application allows users to add student details, mark and edit attendance for a specific date, and view student attendance reports.

### Requirements

Node.js
MongoDB

### Installation

Clone the repository.

* Install dependencies for the server: npm install.
* Install dependencies for the client: cd client && npm install.
* Run the server: npm run server.
* Run the client: cd client && npm start.

### Usage
* Add Student Details

  To add student details, navigate to the “Add Student” page and enter the student’s name and roll number.

* Mark and Edit Attendance
To mark attendance, navigate to the “Mark Attendance” page and select the date for which you want to mark attendance. You can then mark attendance for each student by selecting the appropriate option.

To edit attendance, navigate to the “Edit Attendance” page and select the date for which you want to edit attendance. You can then edit attendance for each student by selecting the appropriate option.

* View Student Attendance Report
To view the student attendance report, navigate to the “Attendance Report” page. The report displays the attendance of each student for the selected date range.


### Packages Used

* Client

  * axios: Promise-based HTTP client for the browser and Node.js.
  
  * react-router-dom: DOM bindings for React Router.
  
  * react-bootstrap: Bootstrap 4 components built with React.
 
* Server

  * express: Fast, unopinionated, minimalist web framework for Node.js.
  
  * dotenv: Loads environment variables from a .env file.
  
  * cors: CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  
  * nodemon: Utility that automatically restarts your node application when file changes in the directory are detected.

* mongoose: Elegant MongoDB object modeling for Node.js.


