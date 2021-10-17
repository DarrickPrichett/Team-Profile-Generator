const Manager = require("../lib/Manager");

text("Can set office telephone number of the Manager", () => {
    const testValue = "Office-phone";
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.Office-phone).toBe(testValue);
});