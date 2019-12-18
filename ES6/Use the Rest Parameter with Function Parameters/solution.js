// Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.

// const sum = (x, y, z) => {
// 	const args = [x, y, z];
// 	return args.reduce((a, b) => a + b, 0);
// };

const sum = (...args) => args.reduce((a, b) => a + b, 0);
