let result = document.getElementById('result');
let expression = document.getElementById('expression');
let multiply = document.getElementById('multiply');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let clear = document.getElementById('clear');
let equally = document.getElementById('equally');

let calculator = (function () {

	plus.addEventListener('click', function() {
		expression.value += '+';
	})

	minus.addEventListener('click', function() {
		expression.value += '-';
	})

	multiply.addEventListener('click', function() {
		expression.value += '*';
	})

	equally.addEventListener('click', function() {
		let	expressionValue = expression.value;;
		result.innerHTML = '';
		let counting = new Function('', 'return ' +expressionValue);
		expressionValue = counting();
		if(expressionValue === undefined) result.innerHTML = '';
		else result.innerHTML = expressionValue;
	})

	clear.addEventListener('click', function() {
		result.innerHTML = '';
		expression.value = '';

	})
}())






// let employee1 = {
// 	name: "Hanna",
// 	position: "Project Manager",
// 	salary: 1000
// };


// let employee2 = {
// 	name: "Bill",
// 	position: "Junior",
// 	salary: 1000
// };

// function promote (newPosition, salaryRise) {
// 	this.position = newPosition;
// 	this.salary += salaryRise;

// 	return this.name + " is " + this.position + " and earns " + this.salary;
// }

// let a = promote.bind(employee1);
// console.log(a('dep head', 500));
// promote.apply(employee2, ["Middle", 300]);
