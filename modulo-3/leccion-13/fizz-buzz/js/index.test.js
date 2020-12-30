const fizzBuzz = require("./index");

describe("FizzBuzz", () => {
  test("return Fizz if it is a multiple of 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });
  test("return Fizz if it is a multiple of 3", () => {
    expect(fizzBuzz(27)).toBe("Fizz");
  });
  test("return Buzz if it is a multiple of 5", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });
  test("return Buzz if it is a multiple of 5", () => {
    expect(fizzBuzz(40)).toBe("Buzz");
  });
  test("return FizzBuzz if it is a multiple of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });
  test("return FizzBuzz if it is a multiple of 3 and 5", () => {
    expect(fizzBuzz(60)).toBe("FizzBuzz");
  });
  test("return the number if this number isn't a multiple of 3 and 5", () => {
    expect(fizzBuzz(11)).toBe(11);
  });
  test("return the number if this number isn't a multiple of 3 and 5", () => {
    expect(fizzBuzz(32)).toBe(32);
  });
});
