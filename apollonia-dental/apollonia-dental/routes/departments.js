const express = require('express');
const router = express.Router();
const Department = require('../models/Department'); // מייבאים את המודל של המחלקה

// 1. GET - קבלת כל המחלקות
router.get('/', async (req, res) => {
    try {
        const departments = await Department.find(); // פנייה למסד הנתונים
        res.json(departments); // החזרת התשובה ללקוח
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. POST - יצירת מחלקה חדשה
router.post('/', async (req, res) => {
    const department = new Department({
        name: req.body.name,
        description: req.body.description,
        location: req.body.location
    });

    try {
        const newDepartment = await department.save(); // שמירה במסד
        res.status(201).json(newDepartment); // 201 = נוצר בהצלחה
    } catch (err) {
        res.status(400).json({ message: err.message }); // 400 = בקשה לא תקינה (למשל חסר שם)
    }
});

// 3. PUT - עדכון מחלקה קיימת (לפי מזהה ID)
router.put('/:id', async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (!department) return res.status(404).json({ message: 'Department not found' });

        // עדכון השדות רק אם נשלחו
        if (req.body.name) department.name = req.body.name;
        if (req.body.description) department.description = req.body.description;
        if (req.body.location) department.location = req.body.location;

        const updatedDepartment = await department.save();
        res.json(updatedDepartment);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// 4. DELETE - מחיקת מחלקה
router.delete('/:id', async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);
        if (!department) return res.status(404).json({ message: 'Department not found' });

        await department.deleteOne();
        res.json({ message: 'Department deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;