const Intern = require('../lib/Intern');

test('can get name via getName', () => {
    const name = 'Bob';
    const e = new Intern(name);
    expect(e.getName()).toBe(name);
}) 

test('can get id via getId', () => {
    const testvalue = 2;
    const e = new Intern('bob', testvalue);
    expect(e.getId()).toBe(testvalue);
}) 

test('can get email via getEmail', () => {
    const testvalue = 'test@test.com';
    const e = new Intern('bob', 2, testvalue);
    expect(e.getEmail()).toBe(testvalue);
}) 

test('can get role via getRole', () => {
    const testvalue = 'Intern';
    const e = new Intern('bob', 2, 'test@test.com');
    expect(e.getRole()).toBe(testvalue);
})

test('can get school via getSchool', () => {
    const testvalue = 'school name';
    const e = new Intern('bob', 2, 'test@test.com', testvalue);
    expect(e.getSchool()).toBe(testvalue);
}) 