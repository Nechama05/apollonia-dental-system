const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: String,
    startDate: { type: Date, default: Date.now },
    // כאן אנחנו מקשרים את העובד למחלקה
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department' // חייב להיות זהה לשם שנתנו במודל של המחלקה
    }
});

module.exports = mongoose.model('Employee', employeeSchema);