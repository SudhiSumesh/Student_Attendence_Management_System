import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = {
      name,
      rollNumber,
    };

    try {
      await axios.post('/api/students', student);
      alert('Student added successfully');
      setName('');
      setRollNumber('');
    } catch (err) {
      console.error(err);
      alert('Error adding student');
    }
  };

  return (
    
    <Form onSubmit={handleSubmit}>
      
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formRollNumber">
        <Form.Label>Roll Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter roll number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Student
      </Button>
    </Form>
  );
};

export default AddStudent;
