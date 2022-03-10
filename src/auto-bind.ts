function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;
	const adjDescriptor: PropertyDescriptor = {
		configurable: true,
		enumerable: false,
		get() {
			return originalMethod.bind(this);
		},
	};
	return adjDescriptor;
}

class Printer {
	message = 'This works!';

	@AutoBind
	printMessage() {
		console.log(this.message);
	}
}

const printer = new Printer();

const button = document.querySelector('button')!;
button.addEventListener('click', printer.printMessage);
