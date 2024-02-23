const isNumber = require('./isNumber');
test('Throws on invalid input', () => {
    expect(() => isNumber('pizza')).toThrow();
    expect(() => isNumber(1)).toBeTruthy();
});