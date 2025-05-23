const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase().replace(/[^\w]/g, "");
    return lowerCaseString === lowerCaseString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
