const fetchPromise = require ('./fetchPromise');

// test('The data is "apple".', () => expect(fetchPromise()).resolves.toBe('apple'))
// test('Fetch fails with an error', () => expect(fetchPromise()).rejects.toThrow('error'))
// test('The data is "apple".', async () => {
//     const data = await fetchPromise();
//     expect(data).toBe('apple');
// });
test("fetchPromise is 'Hi'", () => expect(fetchPromise(true)).resolves.toBe("Hi"))

test("fetchPromise throws", () => expect(fetchPromise(false)).rejects.toThrow("error"))



test('mock implementation of a basic function', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(10)).toBe(52);
    expect(mock).toHaveBeenCalledWith(10);
});
test('Spying on a method of an Object', () => {
    const video = {
        play(){
            return true;
        }
    };
    const spy = jest.spyOn(video, 'play'); //creates a mock function copy of video.play()
    video.play();
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();  //returns implementation to original function
})