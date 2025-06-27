const isPalindrome = (input) => {
    if (typeof input === 'object') {
        return false
    }
    if (!input) {
        return null;
    }
    input = input.replaceAll(" ", "")
    let resturnValue = true
    for (let i = 0; i < input.length / 2; i++) {
        if (input[i].toLowerCase() !== input[input.length - 1 - i].toLowerCase()) {
            resturnValue = false;
        }
    }
    return resturnValue
};

console.log(isPalindrome(['racecar'])); // true

module.exports = isPalindrome
