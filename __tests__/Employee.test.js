const Employee = require("../lib/Employee");

test('Create and employee object', () => {
    const employee = new Employee('Darrick', '94847', 'dp@work.com');

    expect(employee.name).toBe('Darrick');
});














// text("Can set name of the Employee", () => {
//     const testValue = "name";
//     const e = new Employee("Foo", 1, "test@test.com", testValue);
//     expect(e.name).toBe(testValue);
// });

// text("Can set id of the Employee", () => {
//     const testValue = "id";
//     const e = new Employee("Foo", 1, "test@test.com", testValue);
//     expect(e.id).toBe(testValue);
// });

// text("Can set email of the Employee", () => {
//     const testValue = "email";
//     const e = new Employee("Foo", 1, "test@test.com", testValue);
//     expect(e.email).toBe(testValue);
// });
