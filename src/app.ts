function Logger(_: Function) {
	console.log('Logger decorator');
}

function RenderHeading(elemId: string, text: string) {
	return function (target: any) {
		console.log('RenderHeading decorator');
		const elem = document.getElementById(elemId);
		if (elem) {
			const person = new target();
			elem.innerHTML = `<h1>${text} ${person.name}</h1>`;
		}
	};
}

// Decorators runs bottom to top
@Logger
@RenderHeading('test', 'Hello Mr. ')
class Person {
	name = 'Hasibullah';

	constructor() {
		console.log('CONSTRUCTOR: creating an instance');
	}
}
