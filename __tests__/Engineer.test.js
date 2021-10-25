const Engineer = require("../lib/Engineer");

test('Create and manager object', () => {
    const engineer = new Engineer('Darrick', '94847', 'dp@work.com', 'EngineerHub' );

    expect(engineer.github).toBe('EngineerHub');
});