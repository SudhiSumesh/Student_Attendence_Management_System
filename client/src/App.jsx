import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import AddStudent from './Components/AddStudent';
import AttendanceTable from './Components/AttendanceTable';
import EditAttendance from './Components/EditAttendance';
const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const res = await axios.get('/api/students');
      setStudents(res.data);
    };

    fetchStudents();
  }, []);

  return (
    <Container>
      
      <AddStudent />
      {/* <AttendanceTable students={students} /> */}
    </Container>
  );
};

export default App