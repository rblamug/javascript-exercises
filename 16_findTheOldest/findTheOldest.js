const findTheOldest = function(arr) {
    return arr.map((person) => ({
        name: person.name,
        age: person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : new Date().getFullYear() - person.yearOfBirth
    })).reduce((max, current) => current.age > max.age ? current : max);
}

// Do not edit below this line
module.exports = findTheOldest;
