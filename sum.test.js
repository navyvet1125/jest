const sum = require('./sum');
test('Sum of 1 + 2 should equal 3.', () => {
    expect(sum(1,2)).toBe(3)
});

test('Object Assignment', () => {
    const data = { one : 1 };
    data['two'] = 2;
    expect(data).toEqual({ one: 1, two: 2 });
    // expect(data).toBe({ one: 1, two: 2 });  Will fail. toBe is for values, while toEqual is for variables.
});

test('Null and Zero are falsy', () => {
    const n = null;
    expect(n).toBeFalsy()
    expect(0).toBeFalsy()
});

test('1 is truthy', ()=> {
    const n = 1;
    expect(n).toBeTruthy()
});