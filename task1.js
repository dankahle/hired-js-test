
/*
find the max number of words in any given sentence, assume the sentences are terminated with (. ? !)
 */


var s = 'Forget  CVs..Save time . x x';
s = 'We test coders. Give us a try?';


function solution(s) {
	var sentences = s.split(/(\.|\?|\!)/);
	var max = 0;
	sentences.forEach(function(line) {
		var numWords = line.trim().split(/\s+/).length;
		//console.log(line, numWords)
		max = max > numWords? max: numWords;
	})
	return(max);
}

console.log('return', solution(s));