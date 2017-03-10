var arr = [
	{'value': 1},
	{'value': 2},
	{'value': 3}
];


// variant 1 - for loop
/*function sumNums(arr) {
	var sum = 0;

	for (var i = 0, len = arr.length; i < len; i++) {
		sum += arr[i].value;
	}

	console.log(sum);
}*/

// variant 2 - forEach
/*function sumNums(arr) {
	var sum = 0;

	arr.forEach(function (currentelementOfArray) {
		sum += currentelementOfArray.value;
	});

	console.log('sum= ', sum);
}*/

// variant 3 - while

function sumNums(arr) {
	var sum = 0, i = 0;
	while(i < arr.length) {
		sum += arr[i].value;
		i++;
	}

	console.log('sum: ', sum);
}

sumNums(arr);