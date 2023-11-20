const reverseString = function(s) {
  let reversedString = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
