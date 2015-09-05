
/*
find the number of perfect squares in the range given, a perfect square being a number that's representative of some other number being squared: given (4,17) there would be 3: 4,9,16
 */

function solution(a, b) {
	var val = a, count = 0;

	while(val <= b) {
		var squareRoot = Math.sqrt(Math.abs(val));

		if(Math.floor(squareRoot) == squareRoot)
			count++;

		val = val + 1;
	}

	return count;
}

console.log('solution', solution(4,17));