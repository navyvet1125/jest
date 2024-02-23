const fetchPromise = () => new Promise((resolve, reject) => setTimeout(() => resolve('apple'), 1000));

module.exports = fetchPromise;