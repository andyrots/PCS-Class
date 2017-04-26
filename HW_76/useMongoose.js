const mongoose = require('mongoose'),
    Employee = require('./employee'),
    Department = require('./department');

mongoose.connect('mongodb://127.0.0.1:27017/employees');

mongoose.connection.on('error', err => {
    console.error(err);
});

mongoose.connection.on('open', () => {
    console.log('connected');

    const employees = [];

    const donald = new Employee({
        name: 'Donald Trump',
        salary: 200000,
    });

    const mike = new Employee({
        name: 'Mike Pence',
        salary: 150000,
    });

    const doug = new Employee({
        name: 'Doug Jones',
        salary: 75000,
    });

    employees.push(donald);
    employees.push(mike);
    employees.push(doug);

    const departments = [];

    const pubRel = new Department({
        name: 'Public Relations',
        employees: [donald, mike]
    });

    const pressRel = new Department({
        name: 'Press Relations',
        employees: [doug]
    });

    departments.push(pubRel);
    departments.push(pressRel);

    employees.forEach((e) => e.save());
    departments.forEach((e) => { e.save(); e.print(); });
});