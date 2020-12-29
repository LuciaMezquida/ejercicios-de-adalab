const paddingLeft = require("./index");

describe("Padding", () => {
  test("hola and 6 is finally xxhola", () => {
    expect(paddingLeft("hola", 6, "x")).toBe("xxhola");
  });
  test("hola and 6 is finally aahola", () => {
    expect(paddingLeft("hola", 6, "a")).toBe("aahola");
  });
  test("ee and 4 is finally aaee", () => {
    expect(paddingLeft("ee", 4, "aa")).toBe("aaee");
  });
  test("xxxx and 6 is finally xxxxxx", () => {
    expect(paddingLeft("xxxx", 6, "x")).toBe("xxxxxx");
  });
  test(" and 6 is finally xxxxxx", () => {
    expect(paddingLeft("", 6, "x")).toBe("xxxxxx");
  });
  test("hola mi amigo and 6 is finally hola mi amigo", () => {
    expect(paddingLeft("hola mi amigo", 6, "x")).toBe("hola mi amigo");
  });
  test("xxxx and 0 is finally xxxx", () => {
    expect(paddingLeft("xxxx", 0, "x")).toBe("xxxx");
  });
});
