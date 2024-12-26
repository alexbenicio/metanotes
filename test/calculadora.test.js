const calculadora = require('../models/calculadora');

test('Teste simples', () => {
  expect(calculadora.somar(1, 2)).toBe(3);
});

test('Teste simples', () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test('Teste simples', () => {
  expect(calculadora.somar(2, 8)).toBe(10);
});
