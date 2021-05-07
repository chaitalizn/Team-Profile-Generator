const Engineer = require("../lib/Engineer");

test('can get name via getName', () => {
    const name = 'Bob';
    const e = new Engineer(name);
    expect(e.getName()).toBe(name);
}) 

test('can get id via getId', () => {
    const testvalue = 2;
    const e = new Engineer('bob', testvalue);
    expect(e.getId()).toBe(testvalue);
}) 

test('can get email via getEmail', () => {
    const testvalue = 'test@test.com';
    const e = new Engineer('bob', 2, testvalue);
    expect(e.getEmail()).toBe(testvalue);
}) 

test('can get role via getRole', () => {
    const testvalue = 'Engineer';
    const e = new Engineer('bob', 2, 'test@test.com');
    expect(e.getRole()).toBe(testvalue);
})

test('can get github username via getGithub', () => {
    const testvalue = 'username';
    const e = new Engineer('bob', 2, 'test@test.com', testvalue);
    expect(e.getGithub()).toBe(testvalue);
}) 
