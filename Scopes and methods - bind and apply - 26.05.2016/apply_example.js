'use strict';

/*var numbers = [1,2,3];

var max = Math.max.apply(null, numbers); 
var min = Math.min.apply(null, numbers);

var toto = {
	'name': 'Toto Loto',
	'numbers': [5, 6, 2, 3, 7],
	'calc': function (arr) {
		 var sum = arr.reduce(function  (prev, curr) {
	 	 	return prev + curr;
	 	});

	 	return sum;
	}
};



function calc (arrNum) {
	 var sum = arrNum.reduce(function  (prev, curr) {
	 	 return prev + curr;
	 });

	 return sum;
}



console.log(toto.calc.apply(toto, [numbers]));

console.log(toto.calc.apply(null, [numbers]));
*/



var gameController = {
	scores: [20, 34, 55, 46, 77],
	avgScore: null,
	players: [
		{name:"Tommy", playerID:987, age:23},
		{name:"Pau", playerID:87, age:33}
	]
};

var appController = {
	scores: [900, 845, 809, 950],
	avgScore: null,
	avg: function () {
		var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
			return prev + cur;
		});
		this.avgScore = sumOfScores / this.scores.length;
	}
};

var s = {}

// Note that we are using the apply () method, so the 2nd argument has to be an array​
appController.avg.apply(gameController);
console.log(gameController.avgScore); // 46.4

appController.avg.apply(appController); // 876

// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated​
console.log(appController.avgScore); // null​