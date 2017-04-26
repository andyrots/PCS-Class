const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'department' }
});

employeeSchema.methods.print = function () {
    console.log('- ' + this.name + ': ' + this.salary);
};

module.exports = mongoose.model('employee', employeeSchema);