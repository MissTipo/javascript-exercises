sumAll = function(arg1, arg2) {
  if (
    typeof arg1 != "number" ||
    typeof arg2 != "number" ||
    arg1 < 0 ||
    arg2 < 0
  ) {
    return "ERROR";
  }
  let start = 0;
  let end = 0;
  if (arg1 > arg2) {
    start = arg2;
    end = arg1;
  } else if (arg1 < arg2) {
    start = arg1;
    end = arg2;
  } else {
    return arg1;
  }
  sum = 0;
  for (let i = start; i <= end; i += 1) {
    sum += i;
  }
  return sum;
};

console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
