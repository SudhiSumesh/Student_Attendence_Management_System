const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// Get all students
router.get('/', async (req, res) => {
    try {
      const students = await Student.find();
      res.json(students);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
// Create a new student
  router.post('/', async (req, res) => {
    const student = new Student({
      name: req.body.name,
      rollNumber: req.body.rollNumber,
      attendance: [],
    });
  
    try {
      const newStudent = await student.save();
      res.status(201).json(newStudent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

// Update a student's attendance
router.patch('/:id', async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (student == null) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      const attendance = student.attendance.find(
        (a) => a.date === req.body.date
      );
      if (attendance == null) {
        student.attendance.push({
          date: req.body.date,
          status: req.body.status,
        });
      } else {
        attendance.status = req.body.status;
      }
  
      const updatedStudent = await student.save();
      res.json(updatedStudent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  

// Get a student's attendance report
router.get('/:id/report', async (req, res) => {
    try {
      const student = await Student.findById(req.params.id);
      if (student == null) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      const startDate = new Date(req.query.startDate);
      const endDate = new Date(req.query.endDate);
  
      const attendance = student.attendance.filter(
        (a) => a.date >= startDate && a.date <= endDate
      );
  
      const totalDays = Math.ceil(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const totalPresent = attendance.filter((a) => a.status === 'present')
        .length;
      const totalLeave = attendance.filter((a) => a.status === 'leave').length;
      const totalHalfDay = attendance.filter((a) => a.status === 'half-day')
        .length;
      const totalNotUpdated = totalDays - attendance.length;
  
      const maxAttendance = ((totalDays - totalLeave) / totalDays) * 100;
      const currentAttendance = ((totalPresent + totalHalfDay) / totalDays) * 100;
  
      res.json({
        student: student.name,
        startDate: startDate.toISOString().slice(0, 10),
        endDate: endDate.toISOString().slice(0, 10),
        totalDays,
        totalPresent,
        totalLeave,
        totalHalfDay,
        totalNotUpdated,
        maxAttendance,
        currentAttendance,
        attendance,
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  module.exports = router;