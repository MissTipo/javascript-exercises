const palindromes = function(str) {
  let str1 = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let pal = str1.split("").reverse().join("");
  if (pal === str1) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
