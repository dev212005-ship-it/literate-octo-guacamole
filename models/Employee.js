const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
    empId: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    jobTitle: { type: String, required: true },
    baseSalary: { type: Number, required: true },
    dateOfJoining: { type: Date, required: true },
    address: { type: String },
    status: { type: String, enum: ['Active', 'Inactive'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);