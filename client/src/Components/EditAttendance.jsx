import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const EditAttendance = ({ student, date, show, onHide }) => {
  const [status, setStatus] = useState(student.attendance[date] || '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`/api/students/${student._id}`, {
        date,
        status,
      });
      onHide();
    } catch (err) {
      console.error(err);
      alert('Error updating attendance');
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Mark Attendance</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Date: {new Date(date).toLocaleDateString()}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Select status</option>
              <option value="present">Present</option>
              <option value="half-day">Half Day</option>
              <option value="leave">Leave</option>
              <option value="not-updated">Not Updated</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAttendance;
