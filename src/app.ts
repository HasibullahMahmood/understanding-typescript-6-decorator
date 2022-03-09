// this function is called when js reads file for the first time
// Even without initialization Class decorator is being called First
function Logger(target: Function) {
	console.log('Logging...');
	console.log('target (constructor): ', target);
}

@Logger
class Person {
	name = 'Hasibullah';
	constructor() {
		console.log('CONSTRUCTOR: creating an instance');
	}
}

const person = new Person();
console.log(person);
