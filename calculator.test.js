const calculator = require('./calculator');

test("testando soma de 1+1", () => {
    expect(calculator.sum(1, 1)).toBe(2);
})

test("testando subtração de 2-2", () => {
    expect(calculator.sub(2, 2)).toBe(0);
})

test("testando div de 42/6", () => {
    expect(calculator.div(42, 6)).toBe(7);
})

test("testando mult de 5 * 5", () => {
    expect(calculator.mult(5, 5)).toBe(25);
})