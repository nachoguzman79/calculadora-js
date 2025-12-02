const sumar = require ('../src/suma');

test('suma de 2 + 3 es igual a 5', () => {
  expect(sumar(2,3)).toBe(5);
});

test('suma de -1 + 1 es igual a 0', () => {
  expect(sumar(-1,1)).toBe(0);
});

test('suma de 0 + 0 es igual a 0', () => {
  expect(sumar(0,0)).toBe(0);
});

test('suma de 10000 + 350 es igual a 1350', () => {
  expect(sumar(1000,350)).toBe(1350);
});