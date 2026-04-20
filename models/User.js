'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['Admin', 'HR', 'Employee'],
        required: true,
    },
    permissions: {
        canCreateEmployees: { type: Boolean, default: false },
        canEditEmployees: { type: Boolean, default: false },
        canDeleteEmployees: { type: Boolean, default: false },
        canApproveLeave: { type: Boolean, default: false },
        canProcessPayroll: { type: Boolean, default: false }
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);