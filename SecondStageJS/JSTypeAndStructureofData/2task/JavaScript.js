let matrix_input = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16]
];

let matrix_input1 = [
	[21, 22, 23],
	[24, 25, 26],
	[27, 28, 29]
];

let matrix_input2 = [
	[10, 20, 30, 40, 50],
	[60, 70, 80, 90, 100],
	[110, 120, 130, 140, 150],
	[160, 170, 180, 190, 200],
	[210, 220, 230, 240, 250]
];

function turn_matrix(matrix_input){
	let column = matrix_input.length;
	let matrix_output = [];

	for(i = 0; i < matrix_input.length; i++){
		matrix_output[i] = [];
		for(j = 0; j < matrix_input.length; j++){
			matrix_output[i][j] = [];
		}
	}

	for(i = 0; i < matrix_input.length; i++){
		for(j = 0; j < matrix_input.length; j++){
			matrix_output[j][column-1] = matrix_input[i][j];
		}
		column--;
	}
	return matrix_output;
}

console.log(turn_matrix(matrix_input));
console.log(turn_matrix(matrix_input1));
console.log(turn_matrix(matrix_input2));



// function generate_matrix(matrix_input_length){
// 	let matrix = [];

// 	for(i = 0; i < matrix_input_length; i++){
// 		matrix[i] = [];
// 		for(j = 0; j < matrix_input_length; j++){
// 			matrix[i][j] = [];
// 		}
// 	}
// 	return matrix;
// }

// function turn_matrix(arr_output, arr_input){
// 	let column = arr_input.length;

// 	for(i = 0; i < arr_input.length; i++){
// 		for(j = 0; j < arr_input[i].length; j++){
// 			arr_output[j][column-1] = arr_input[i][j];
// 		}
// 		column--;
// 	}
// 	return arr_output;
// }

// console.log(turn_matrix(generate_matrix(matrix_input.length), matrix_input));
// console.log(turn_matrix(generate_matrix(matrix_input1.length), matrix_input1));
// console.log(turn_matrix(generate_matrix(matrix_input2.length), matrix_input2));
