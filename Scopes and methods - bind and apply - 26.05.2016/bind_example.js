var _name = 'Kosio';	// defined in the global scope, but it's not goint to be returned by 
// stoleSecretIdentity because the method is not defined in the global scope as well

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};

var villain = {
	_name: 'Evil Betty'/*,
	getSecretIdentity: function () {
		 return this._name;
	}*/
};

var stoleSecretIdentity = hero.getSecretIdentity;

var stoleEvilIdentity = villain.getSecretIdentity;

/*
var otherName = 'Misho';
function stoleSecretIdentity1 () {
	//otherName = 'Kosio';
	return otherName;
}

*/
// console.log(stoleSecretIdentity1());

/*
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
var getName = hero.getSecretIdentity.bind(hero);
console.log(getName());*/

/*console.log(stoleEvilIdentity());
console.log(villain.getSecretIdentity());*/
/*
var getName = villain.getSecretIdentity.bind(villain);
console.log(getName());*/


var getName = hero.getSecretIdentity.bind(villain);
console.log(getName());