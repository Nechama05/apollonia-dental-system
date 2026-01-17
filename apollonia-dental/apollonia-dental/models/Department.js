const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // חובה להזין שם
        unique: true    // לא יכולות להיות שתי מחלקות עם אותו שם
    },
    description: String,
    location: String
});

module.exports = mongoose.model('Department', departmentSchema);