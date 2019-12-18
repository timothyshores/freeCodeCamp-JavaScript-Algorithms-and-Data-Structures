// Use multiple conditional operators in the checkSign function to check if a number is positive, negative or zero. The function should return "positive", "negative" or "zero".

const checkSign = num =>
	num === 0 ? "zero" : num > 0 ? "positive" : "negative";
