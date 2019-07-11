function buttonOnClick() {
	result.innerHTML = '';
	let x = 0;
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
			let selected = radio()
			if (selected == 'sum') {
				if (x1 <= x2) { 
					while (x1 <= x2) {
						x = x + x1;
						x1++;
			 		}
			 	} else {
			 		while (x1 >= x2) {
			 			x = x + x1;
			 			x1--;
			 		}
			 	}
				result = document.getElementById('result');
				result.append("Сумма всех чисел от х1 до х2 = " + x);
			} else {
				x = 1;
				if (x1 <= x2) { 
					while (x1 <= x2) {
						x = x * x1;
						x1++;
			 		}
			 	} else {
			 		while (x1 >= x2) {
			 			x = x * x1;
			 			x1--;
			 		}
			 	}
				result.append("Произведение всех чисел от х1 до х2 = " + x);
			}
		}
	}
} 

function ClearInput() {
	document.getElementById('x1').value = "";
	document.getElementById('x2').value = "";
}

function radio() {
	let selected = 0;
	let radio = document.getElementsByName('operation');
	for (let i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			return radio[i].value;
		}
	}
}