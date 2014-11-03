var Bee = function() {
	Grub.call(this);
	this.age = 5;
	this.color = 'yellow';
	this.job = "Keep on growing";	
};
Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;



// // meanwhile in my js code 
// var myBee = new Bee()
// // myBee.color // Grub.

// var Bee = function  () {
// 	// body...
// // the function object that I am in has a prototype property
// // set delegation reference of newObj to prototype

// 	var newObj = {};
// 	newObj.age = 5;

// 	return newObj;
// }

// var bee = Bee();
// bee.color