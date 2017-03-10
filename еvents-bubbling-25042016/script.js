/*var menuHome = document.getElementById('home');
var menuAbout = document.getElementById('about');
var menuSection = document.getElementById('section');
var menuContacts = document.getElementById('contacts');*/

var menu = document.getElementById('menu');

menu.addEventListener('click', function (event) {
	switch(event.target.id) {
		case 'home':
			console.log('Clicked: ', event.target.id);
		break;
		case 'about':
			console.log('Clicked: ', event.target.id);
		break;
		case 'section':
			console.log('Clicked: ', event.target.id);
		break;
		case 'contacts':
			console.log('Clicked: ', event.target.id);
		break;
		default: 
			console.log('default clicked...');
	}
});
/*
menuAbout.addEventListener('click', function (event) {
	console.log('Clicked: ', event.target.id);
	document.bgColor = 'white';
});

menuSection.addEventListener('click', function (event) {
	console.log('Clicked: ', event.target.id);
});

menuContacts.addEventListener('click', function (event) {
	console.log('Clicked: ', event.target.id);
});*/