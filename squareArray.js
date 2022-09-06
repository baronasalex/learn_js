const arr = [1, 2, 3, 4, 5, 6]

const result = arr.reduce(function(sum, elem) {
	return sum + Math.pow(elem, 2);
}, 0)

console.log(result)