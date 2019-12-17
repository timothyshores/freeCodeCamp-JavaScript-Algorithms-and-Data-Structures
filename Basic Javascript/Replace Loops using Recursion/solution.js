// Write a recursive function, sum(arr, n), that returns the sum of the elements from 0 to n inclusive in an array arr.

function sum(arr, n) {
	return n <= 0 ? arr[0] : sum(arr, n - 1) + arr[n];
}
