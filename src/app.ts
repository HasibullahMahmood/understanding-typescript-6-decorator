function WithTemplate(htmlContent: string, elemId: string) {
	return function <T extends { new (...args: any[]): { name: string } }>(target: T) {
		return class extends target {
			constructor(...args: any[]) {
				super(...args);
				const elem = document.getElementById(elemId)!;
				elem.innerHTML = htmlContent;
				elem.querySelector('h1')!.innerText += ' '+ this.name;
			}
		};
	};
}

@WithTemplate('<h1>Hello </h1>', 'test')
class Person {
	name: string;
	constructor(name: string) {
		console.log('Constructor', name);
		this.name = name;
	}
}

const person = new Person('Hasibullah');
console.log(person);
