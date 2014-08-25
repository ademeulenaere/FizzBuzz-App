$(document).ready(function() {
	function fizzbuzz() {
		/*print 1 - 100 with no modifications*/
		for(var i = 1; i <= 100; i++) {
			console.log(i);
			if(i % 5 === 0 && i % 3 === 0) {
				/*(Print "fizzbuzz");*/
				$('#empty').append('fizzbuzz');
			}
			else if (i % 3 === 0) {
				/*(print "fizz")*/
				$('#empty').append('fizz');
			}
			else if (i % 5 === 0) {
				/*print "buzz")*/
				$('#empty').append('buzz');
			}
		}
	}
});
	
