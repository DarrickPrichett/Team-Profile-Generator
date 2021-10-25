const Intern = require("../lib/Intern");

test('Create and manager object', () => {
    const intern = new Intern('Darrick', '94847', 'dp@work.com', 'WashU' );

    expect(intern.school).toBe('WashU');
});