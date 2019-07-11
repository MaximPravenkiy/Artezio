function buttonOnClick() {
	result.innerHTML = '';
	let x1 = document.getElementById('x1').value;
	let x2 = document.getElementById('x2').value;
	if (x1 === '' || x2 === '') {
		alert("Поля х1 и х2 должны быть заполнены.")
	} else {
		x1 = parseInt(x1);
		x2 = parseInt(x2);
		if (Number.isNaN(x1) || Number.isNaN(x2)) {
			alert("В поля x1 и x2 должны быть введены числовые значения.");
		} else {
			let x = x1 + x2;
			result = document.getElementById('result');
			result.append("x1 + x2 = " + x);
		}
	}
} 


