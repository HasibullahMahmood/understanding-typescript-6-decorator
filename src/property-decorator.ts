// // target: Prototype
// function Logger(target: any, propertyName: string) {
// 	console.log('Logger');
// 	console.log('target: ', target);
// 	console.log('propertyName: ', propertyName);
// }

// class Product {
// 	@Logger
// 	public title: string;
// 	@Logger
// 	private price: number;

// 	constructor(title: string, price: number) {
// 		console.log('Constructor: ');
// 		this.title = title;
// 		this.price = price;
// 	}

// 	getPrice() {
// 		return this.price;
// 	}

// 	setPrice(price: number) {
// 		this.price = price;
// 	}
// }
