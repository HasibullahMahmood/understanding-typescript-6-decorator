// target: Prototype
function Log1(target: any, propertyName: string) {
	console.log('Property decorator');
	console.log('target: ', target);
	console.log('propertyName: ', propertyName);
}

function Log2(target: any, methodName: string, descriptor: PropertyDescriptor) {
	console.log('Accessor decorator: ');
	console.log(target);
	console.log(methodName);
	console.log(descriptor);
}

function Log3(target: any, methodName: string, descriptor: PropertyDescriptor) {
	console.log('Method decorator: ');
	console.log(target);
	console.log(methodName);
	console.log(descriptor);
}

function Log4(target: any, methodName: string, position: number) {
	console.log('Parameter decorator: ');
	console.log(target);
	console.log(methodName);
	console.log(position); // index of parameter
}

class Product {
	@Log1
	public title: string;
	@Log1
	private price: number;

	constructor(title: string, price: number) {
		console.log('Constructor: ');
		this.title = title;
		this.price = price;
	}

	// accessor
	@Log2
	get getPrice() {
		return this.price;
	}

	// accessor
	set setPrice(price: number) {
		this.price = price;
	}

	// method
	@Log3
	getPriceWithTax(@Log4 tax: number) {
		return this.price * tax;
	}
}
