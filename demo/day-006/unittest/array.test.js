//array

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
  "soap",
];

test("the shopping list has soap on it", () => {
  expect(shoppingList).toContain("soap");
  expect(new Set(shoppingList)).toContain("soap");
});
