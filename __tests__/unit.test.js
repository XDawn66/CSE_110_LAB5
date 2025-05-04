// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

test("input 510-566-5333 is truely a phone number with dash", () => {
  expect(isPhoneNumber("510-566-5333")).toBe(true);
});

test("input (911)550-9112 is truely a phone number with parentheses and dash", () => {
  expect(isPhoneNumber("(911)550-9112")).toBe(true);
});

test("input 1 + 2 is not a phone number", () => {
  expect(isPhoneNumber("1 + 2")).toBe(false);
});

test("input abc is truely a phone number", () => {
  expect(isPhoneNumber("abc")).toBe(false);
});

test("input 123@gmail.com is a valid mail format", () => {
  expect(isEmail("123@gmail.com")).toBe(true);
});

test("input ecca@cse.edu is a valid mail format", () => {
  expect(isEmail("ecca@cse.edu")).toBe(true);
});

test("input 123gmail.com is not a valid mail format", () => {
  expect(isEmail("123gmail.com")).toBe(false);
});

test("input 456@gmailcom is not a valid mail format", () => {
  expect(isEmail("456@gmailcom")).toBe(false);
});

test("input f123456abcd is truely a strong password ", () => {
  expect(isStrongPassword("f123456abcd")).toBe(true);
});

test("input kASDAs2269 is truely a strong password", () => {
  expect(isStrongPassword("kASDAs2269")).toBe(true);
});

test("input 12333444 is not a strong password since it's missing enough letters", () => {
  expect(isStrongPassword("12333444")).toBe(false);
});

test("input 2213avAv is not a strong password since it doesn't start with letter", () => {
  expect(isStrongPassword("2213avAv")).toBe(false);
});

test("input 02/06/2012 is a valid date", () => {
  expect(isDate("02/06/2012")).toBe(true);
});

test("input 9/2/2025 is a valid date", () => {
  expect(isDate("9/2/2025")).toBe(true);
});

test("input 001/2/2022 is violating xx/xx/yyyy format", () => {
  expect(isDate("001/2/2022")).toBe(false);
});

test("input 1/2/25 is violating xx/xx/yyyy format", () => {
  expect(isDate("1/2/25")).toBe(false);
});

test("input #ABC is a valid hex color", () => {
  expect(isHexColor("#ABC")).toBe(true);
});

test("input a1b2c3 is a valid hex color", () => {
  expect(isHexColor("a1b2c3")).toBe(true);
});

test("input #abcd is not a valid hex color", () => {
  expect(isHexColor("#abcd")).toBe(false);
});

test("input 12345 is not a valid hex color", () => {
  expect(isHexColor("12345")).toBe(false);
});
