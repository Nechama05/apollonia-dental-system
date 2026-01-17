const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// 1. GET - קבלת כל העובדים (כולל פרטי המחלקה שלהם!)
router.get('/', async (req, res) => {
    try {
        // הפקודה .populate('department') אומרת למונגו:
        // "לך לטבלת המחלקות, תביא את השם והפרטים של המחלקה לפי ה-ID ששמור אצל העובד"
        const employees = await Employee.find().populate('department');
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. POST - יצירת עובד חדש
router.post('/', async (req, res) => {
    const employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        department: req.body.department, // כאן נשלח את ה-ID של המחלקה
        startDate: req.body.startDate
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 3. PUT - עדכון עובד
router.put('/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // מחזיר את העובד המעודכן ולא את הישן
        );
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. DELETE - מחיקת עובד
router.delete('/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;