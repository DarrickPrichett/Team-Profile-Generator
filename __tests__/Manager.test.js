const Manager = require("../lib/Manager");

test('Create and manager object', () => {
    const manager = new Manager('Darrick', '94847', 'dp@work.com', '1234567890' );

    expect(manager.officeNumber).toBe('1234567890');
});
