const mongoose = require('mongoose');
const payrollSchema = new mongoose.Schema({
    employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
    month: { type: Number, required: true },
    year: { type: Number, required: true },
    baseSalary: { type: Number, required: true },
    bonus: { type: Number, default: 0 },
    incomeTax: { type: Number, default: 0 },
    pfDeduction: { type: Number, default: 0 },
    otherDeductions: { type: Number, default: 0 },
    grossSalary: { type: Number },
    netSalary: { type: Number },
    status: { type: String, enum: ['Pending', 'Processed', 'Paid'], default: 'Pending' },
    paymentDate: { type: Date }
}, { timestamps: true });
payrollSchema.pre('save', function(next) {
    this.grossSalary = this.baseSalary + this.bonus;
    this.netSalary = this.grossSalary - (this.incomeTax + this.pfDeduction + this.otherDeductions);
    next();
});
module.exports = mongoose.model('Payroll', payrollSchema);