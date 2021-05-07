const Employee = require("../lib/Employee");

test('can get name via getName', () => {
    const name = 'Bob';
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
}) 

test('can get id via getId', () => {
    const testvalue = 2;
    const e = new Employee('bob', testvalue);
    expect(e.getId()).toBe(testvalue);
}) 

test('can get email via getEmail', () => {
    const testvalue = 'test@test.com';
    const e = new Employee('bob', 2, testvalue);
    expect(e.getEmail()).toBe(testvalue);
}) 

test('can get role via getRole', () => {
    const testvalue = 'Employee';
    const e = new Employee('bob', 2, 'test@test.com', testvalue);
    expect(e.getRole()).toBe(testvalue);
}) 