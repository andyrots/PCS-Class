const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: String,
    employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'employee' }]
});

departmentSchema.methods.print = function () {
    console.log(this.name);
    this.employees.forEach(employee => {
        employee.print();
    });
};

module.exports = mongoose.model('department', departmentSchema);