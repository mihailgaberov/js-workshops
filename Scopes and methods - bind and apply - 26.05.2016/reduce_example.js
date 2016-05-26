var myArr = [
	{ 'val': 1 },
	{ 'val': 2 },
	{ 'val': 3 },
	{ 'val': 4 },
	{ 'val': 5 }
];

var sum = myArr.reduce(function (prev, curr) {
	return prev + curr.val;
}, 0);

console.log('sum= ', sum);



