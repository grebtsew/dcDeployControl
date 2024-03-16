// dummy.test.js

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 3 - 1 to equal 2", () => {
  expect(subtract(3, 1)).toBe(2);
});
