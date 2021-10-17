const Engineer = require("../lib/Engineer");

text("Can set GitHub name via constructor", () => {
    const testValue = "GitHub";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHub");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub name via getRole()", () => {
    const testValue = "GitHub";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});