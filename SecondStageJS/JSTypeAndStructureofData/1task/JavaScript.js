let matrix = [
	[1, 0, 3],
	[8, 5, 5],
	[4, 8, 5]
];

let matrix1 = [
	[10, 6, 7],
	[20, 4, 3],
	[30, 2, 1]
];

let matrix2 = [
	[4, 8, 2],
	[7, 12, 1],
	[5, 9, 11]
];

/*
let sum = 0;

for(i = 0; i<matrix.length; i++) {
	console.log(matrix[i]);
	for(j = 0; j < matrix[i].length; j++) {
		console.log(matrix[i][j]);
		sum += matrix[i][j];
	}
}
console.log(sum);
*/

function sum_elem (arr) {
	let sum = 0;

	for(i = 0; i < arr.length; i++){
		for(j = 0; j < arr[i].length; j++){
			sum += arr[i][j];
		}
	}
	return sum;
}

console.log(sum_elem(matrix));
console.log(sum_elem(matrix1));
console.log(sum_elem(matrix2));
