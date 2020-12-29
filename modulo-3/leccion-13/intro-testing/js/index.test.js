const sum = require("./index");
describe("Sum App", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("adds -1 + 2 to equal 1", () => {
    expect(sum(-1, 2)).toBe(1);
  });
  test("adds 0.22 + 0.78 to equal 1", () => {
    expect(sum(0.22, 0.78)).toBe(1);
  });
});
