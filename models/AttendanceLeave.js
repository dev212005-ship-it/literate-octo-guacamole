const mongoose = require('mongoose');

// Attendance Schema
const attendanceSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Employee' },
    date: { type: Date, required: true },
    status: { type: String, required: true, enum: ['Present', 'Absent', 'Leave'] },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

// Leave Schema
const leaveSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Employee' },
    date: { type: Date, required: true },
    status: { type: String, required: true, enum: ['Approved', 'Pending', 'Rejected'] },
    leaveType: { type: String, enum: ['Sick Leave', 'Casual Leave', 'Annual Leave'], required: true },
    approvalWorkflow: { type: String, required: true },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = { Attendance, Leave };