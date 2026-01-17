const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// ייבוא הראוטים שיצרנו
const departmentsRouter = require('./routes/departments');
const employeesRouter = require('./routes/employees');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes - חיבור הנתיבים לשרת
app.use('/api/departments', departmentsRouter);
app.use('/api/employees', employeesRouter);

// בדיקת שפיות
app.get('/api/health', (req, res) => {
    res.json({ message: "Server is running and DB logic is active!" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});