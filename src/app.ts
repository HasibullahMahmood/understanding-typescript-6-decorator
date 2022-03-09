function RenderHeading(elemId: string, text: string) {
	return function (target: any) {
		const elem = document.getElementById(elemId);
		if (elem) {
			const person = new target();
			elem.innerHTML = `<h1>${text} ${person.name}</h1>`;
		}
	};
}

@RenderHeading('test', 'Hello Mr. ')
class Person {
	name = 'Hasibullah';

	constructor() {
		console.log('CONSTRUCTOR: creating an instance');
	}
}
