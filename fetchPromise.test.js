const fetchPromise = require ('./fetchPromise');

test('The data is "apple".', () => expect(fetchPromise()).resolves.toBe('apple'))
// test('Fetch fails with an error', () => expect(fetchPromise()).rejects.toThrow('error'))