/* 1. Business Logic.
			Does not handle user interactivity.
			Defines functions to be called by UI Logic.
*/
var add = function(number1, number2) {
	return number1 + number2; 
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
}

/* 2. User Interface Logic. 
			Handles interactivity with user.
			Calls functions defined in Business Logic */
$(document).ready(function() {
	/* 1. Add */
	$('form#add').submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($('#add1').val());
		var number2 = parseInt($('#add2').val());
		// alert(add(number1, number2));
		var result = add(number1, number2);
		$('#output-add').text("Result = " + result); 
	});
	/* 2. Subtract */
	$('form#subtract').submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($('#sub1').val());
		var number2 = parseInt($('#sub2').val());
		var result = subtract(number1, number2);
		$('#output-subtract').text("Result = " + result);
	});
	/* 3. Multiply */
	$('form#multiply').submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($('#multi1').val());
		var number2 = parseInt($('#multi2').val());
		var result = multiply(number1, number2);
		$('#output-multiply').text("Result = " + result);
	});
	/* 4. Divide */
	$('form#divide').submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($('#divide1').val());
		var number2 = parseInt($('#divide2').val());
		var result = divide(number1, number2);
		$('#output-divide').text("Result = " + result)
	});
});


