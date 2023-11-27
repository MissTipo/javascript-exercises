const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let _sum = 0;
	for (let i = 0; i < arr.length; i++) {
		_sum += arr[i];
	}
	return _sum;
};

const multiply = function(arr) {
	let product = 1;
	for (let i = 0; i < arr.length; i++) {
		product *= arr[i];
	}
	return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a == 0 || a == 1) {
		return 1;
	} else {
		return a * factorial(a - 1);
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
