const isNumber = (input) => {
    if(isNaN(input)) throw new Error("Not a number!")
    else return true;
}

module.exports = isNumber;