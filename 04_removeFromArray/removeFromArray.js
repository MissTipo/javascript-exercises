const removeFromArray = function(arr, ...num) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (num.includes(arr[i])) {
      // Do nothing
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

removeFromArray([1, 3, 6], 6, 1);
// Do not edit below this line
module.exports = removeFromArray;
