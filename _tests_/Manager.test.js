const Manager = require("../lib/Manager");

test('can get name via getName', () => {
    const name = 'Bob';
    const e = new Manager(name);
    expect(e.getName()).toBe(name);
}) 

test('can get id via getId', () => {
    const testvalue = 2;
    const e = new Manager('bob', testvalue);
    expect(e.getId()).toBe(testvalue);
}) 

test('can get email via getEmail', () => {
    const testvalue = 'test@test.com';
    const e = new Manager('bob', 2, testvalue);
    expect(e.getEmail()).toBe(testvalue);
}) 

test('can get role via getRole', () => {
    const testvalue = 'Manager';
    const e = new Manager('bob', 2, 'test@test.com');
    expect(e.getRole()).toBe(testvalue);
})

test('can get officeNumber', () => {
    const testvalue = 9;
    const e = new Manager('bob', 2, 'test@test.com', testvalue);
    expect(e.getOfficeNumber()).toBe(testvalue);
}) 
