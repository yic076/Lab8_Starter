// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('is phone number true test 1', () => {
    expect(functions.isPhoneNumber("(123)456-7890")).toBe(true);
});
test('is phone number true test 2', () => {
    expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
});
test('is phone number fasle test 1', () => {
    expect(functions.isPhoneNumber("1234-56-7890")).toBe(false);
});
test('is phone number fasle test 2', () => {
    expect(functions.isPhoneNumber("123 456 7890")).toBe(false);
});
test('is email true test 1', () => {
    expect(functions.isEmail("abc@ucsd.edu")).toBe(true);
});
test('is email true test 2', () => {
    expect(functions.isEmail("abc@efgh.us")).toBe(true);
});
test('is email false test 1', () => {
    expect(functions.isEmail("abc@ucsd.eduu")).toBe(false);
});
test('is email false test 2', () => {
    expect(functions.isEmail("ab!c@ucsd.edu")).toBe(false);
});
test('is strong password true test 1', () => {
    expect(functions.isStrongPassword("abcdefg")).toBe(true);
});
test('is strong password true test 2', () => {
    expect(functions.isStrongPassword("ABCDEFG")).toBe(true);
});
test('is strong password false test 1', () => {
    expect(functions.isStrongPassword("ab")).toBe(false);
});
test('is strong password false test 2', () => {
    expect(functions.isStrongPassword("abcdefghijklmnop")).toBe(false);
});
test('is date true test 1', () => {
    expect(functions.isDate("11/11/2011")).toBe(true);
});
test('is date true test 2', () => {
    expect(functions.isDate("1/1/2001")).toBe(true);
});
test('is date false test 1', () => {
    expect(functions.isDate("11/11/22")).toBe(false);
});
test('is date false test 2', () => {
    expect(functions.isDate("11-11-2011")).toBe(false);
});
test('is hex color true test 1', () => {
    expect(functions.isHexColor("#abc")).toBe(true);
});
test('is hex color true test 2', () => {
    expect(functions.isHexColor("#ab0fc4")).toBe(true);
});
test('is hex color false test 1', () => {
    expect(functions.isHexColor("#xyz")).toBe(false);
});
test('is hex color false test 2', () => {
    expect(functions.isHexColor("#ab04f")).toBe(false);
});
