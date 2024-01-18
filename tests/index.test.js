import clnames from "../src";

test("should concat simple classnames", () => {
  const input = clnames("my-class-one", "my-class-two my-class-three");
  const output = "my-class-one my-class-two my-class-three";

  expect(input).toBe(output);
});

test("should concat conditional classnames", () => {
  const input = clnames({
    "my-class-one": true,
    "my-class-two": false,
    "my-class-three": true,
  });
  const output = "my-class-one my-class-three";

  expect(input).toBe(output);
});

test("should concat simple and conditional classnames", () => {
  const input = clnames("my-class-one", {
    "my-class-two": true,
    "my-class-three": false,
    "my-class-four": true,
  });
  const output = "my-class-one my-class-two my-class-four";

  expect(input).toBe(output);
});
