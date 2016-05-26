var a = 2;

function test (argument) {
	 var a = 1;
	 console.log('inner a= ', a);
}



console.log('out a= ', a);

test();