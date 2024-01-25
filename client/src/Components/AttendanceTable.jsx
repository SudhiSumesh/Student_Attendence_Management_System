import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import EditAttendance from './EditAttendance';

const AttendanceTable = ({ students }) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handlePrevDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - 1);
    setDate(newDate.toISOString().slice(0, 10));
  };

  const handleNextDate = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);
    setDate(newDate.toISOString().slice(0, 10));
  };

  const handleEditAttendance = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Attendance Table</h2>
        <div>
          <Button variant="secondary" onClick={handlePrevDate}>
            Previous
          </Button>{' '}
          <Button variant="secondary" onClick={handleNextDate}>
            Next
          </Button>
        </div>
      </div>
      <p>Date: {new Date(date).toLocaleDateString()}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                (day) => {
                  const attendance = student.attendance.find(
                    (a) => a.date === date && a.day === day
                  );
                  return (
                    <td
                      key={`${student._id}-${day}`}
                      className={
                        attendance ? `status-${attendance.status}` : ''
                      }
                      onClick={() => handleEditAttendance(student)}
                    >
                      {attendance ? attendance.status : ''}
                    </td>
                  );
                }
              )}
            </tr>
          ))}
        </tbody>
      </Table>
      <EditAttendance
        student={selectedStudent}
        date={date}
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
      />
    </>
  );
};

export default AttendanceTable;
