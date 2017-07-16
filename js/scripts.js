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
	/* Refactored UI Logic */
	$('form#calculator').submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($('#input1').val());
		var number2 = parseInt($('#input2').val());
		var operator = $('input:radio[name=operator]:checked').val();
		var result;
		// console.log("1st number: " + number1);
		// console.log("2nd number: " + number2);
		// console.log("operator: " + operator);
		if (operator === "add") {
			result = add(number1, number2);
		}
		else if (operator === "subtract") {
			result = subtract(number1, number2);
		}
		else if (operator === "multiply") {
			result = multiply(number1, number2);
		}
		else if (operator === "divide") {
			result = divide(number1, number2);
		}
		$('#output').text(result);
	});
});


