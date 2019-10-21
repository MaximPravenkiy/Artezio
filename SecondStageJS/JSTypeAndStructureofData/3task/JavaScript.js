let string = 'Hello, world';
let string1 = 'My ; name ; is ; Maksim......';
let string2 = '!&*?Artezio - softwarE devEloper!*&?';
let string3 = '$%w%$a$%s$$%%$%$%$%^^^$%%%^^^%$$$^^^$$';

function unique_symbols(string){
	let curr_val = '';

	string = string.split('');

	for(i = 0; i < string.length; i++){
		curr_val = string[i];
		for(j = string.length - 1; j > i; j--){
			if(curr_val == string[j]){
				string.splice(j, 1);
			}
		}
	}
	return string.length;
}

console.log(unique_symbols(string));
console.log(unique_symbols(string1));
console.log(unique_symbols(string2));
console.log(unique_symbols(string3));
