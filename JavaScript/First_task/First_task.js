// 1-ый вариант решения
function buttonOnClick() {
	result.innerHTML = '';
	let x1 = parseInt(document.getElementById('x1').value);
	let x2 = parseInt(document.getElementById('x2').value);
	if (Number.isNaN(x1) || Number.isNaN(x2)) {
		alert("В поля x1 и x2 должны быть введены числовые значения.");
	} else {
		let x = x1 + x2;
		result = document.getElementById('result');
		result.append("x1 + x2 = " + x);
	}
} 

// 2-ой вариант решения
/*
function buttonOnClick() {
	if (result.childNodes.length > 0) {
		result.removeChild(result.firstChild);
	} 	
	let x1 = parseInt(document.getElementById('x1').value);
	let x2 = parseInt(document.getElementById('x2').value);
	if (Number.isNaN(x1) || Number.isNaN(x2)) {
		alert("В поля x1 и x2 должны быть введены числовые значения.");
	} else {
		let x = x1 + x2;
		result = document.getElementById('result');
		result.append("x1 + x2 = " + x);
	}
}
*/
