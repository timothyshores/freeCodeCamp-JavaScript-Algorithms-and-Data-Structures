// Create a function called randomRange that takes a range myMin and myMax and returns a random number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

const randomRange = (myMin, myMax) =>
	Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
