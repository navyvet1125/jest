const asyncFetch = require('./asyncFetch');
const isNumber = require('./isNumber');

test('Data is a number.', done => {
    const callback = (data) => {
        try{
            expect(data).toBe(1);
            done();
        } catch (error) {
            done(error);
        }
    }

    asyncFetch(callback, 1)
});