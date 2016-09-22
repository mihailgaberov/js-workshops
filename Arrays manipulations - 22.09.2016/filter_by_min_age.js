/* Write a JS function that stores the name and age of two persons in objects and then filters them by minimum age.
The input comes as array of string elements. The first element is the minimum age. The second and third elements are the name and age of the first person and the fourth and fifth elements – the name and age of the second person. The three age parameters need to be parsed as numbers.
The output should be printed to the console.

          Input	                                 Output
['12', 'Ivan', '15', 'Asen', '9']	{ name: 'Ivan', age: 15 }

*/

function filterByMinAge(arrInput) {
	"use strict";

	if (arrInput === undefined || arrInput.length === 0) {
		throw new Error('Invalid input data.');
	}


    let minAge = Number(arrInput[0]);
	
	let objPerson1 = {
		name: arrInput[1],
		age: Number(arrInput[2])
	};

	let objPerson2 = {
		name: arrInput[3],
		age: Number(arrInput[4])
	};

	if (objPerson1.age < minAge && objPerson2.age < minAge) {
		return;
	}

	if (objPerson1.age > minAge && objPerson2.age > minAge) {
		if (objPerson1.age > objPerson2.age) {
			return objPerson2;
		} else {
			return objPerson1;
		}
	}

	if (objPerson1.age >= minAge && objPerson2.age < minAge) {
		return objPerson1;
	} else if (objPerson1.age < minAge && objPerson2.age >= minAge) {
		return objPerson2;
	}
}

var res = filterByMinAge(['19', 'Pesho', '119', 'Gosho', '20']);
console.log('>>>>>> ', res)