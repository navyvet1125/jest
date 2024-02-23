const asyncFetch = (callback, param) => setTimeout(() => callback(param), 1000);
module.exports = asyncFetch;