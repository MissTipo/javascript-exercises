const findTheOldest = function(people) {
  let oldestPerson = people[0];
  let oldestAge = 0;
  for (let i = 0; i < people.length; i++) {
    let currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
    if (people[i].yearOfDeath === undefined) {
      currentAge = new Date().getFullYear() - people[i].yearOfBirth;
    }
    if (currentAge > oldestAge) {
      oldestAge = currentAge;
      oldestPerson = people[i];
    }
  }
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
