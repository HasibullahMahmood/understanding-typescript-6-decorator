// Decorator factories(able to pass parameter)

// function Logger(message: String) {
// 	return function (target: Function) {
// 		console.log('target(constructor): ', target);
// 		console.log('message: ', message);
// 	};
// }

// @Logger('Called from person')
// class Person {
// 	name = 'Hasibullah';

// 	constructor() {
// 		console.log('CONSTRUCTOR: creating an instance');
// 	}
// }

// const person = new Person();
// console.log(person);
