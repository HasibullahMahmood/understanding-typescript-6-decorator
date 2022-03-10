interface RegisteredValidations {
	[constructorName: string]: {
		[propertyName: string]: string[];
	};
}

// registeredValidations = {
//     course: {
//          title: ['required']
//          price: ['required', 'positive']
//      }
// }

const registeredValidations: RegisteredValidations = {};

function Required(target: any, propertyName: string) {
	const classConfig = registeredValidations[target.constructor.name];
	const propConfig = classConfig && propertyName in classConfig ? classConfig[propertyName] : [];
	registeredValidations[target.constructor.name] = {
		...classConfig,
		[propertyName]: [...propConfig, 'required'],
	};
}

function PositiveNumber(target: any, propertyName: string) {
	const classConfig = registeredValidations[target.constructor.name];
	const propConfig = propertyName in classConfig ? classConfig[propertyName] : [];
	registeredValidations[target.constructor.name] = {
		...classConfig,
		[propertyName]: [...propConfig, 'positive'],
	};
}

function validate(obj: any): boolean {
	const validationConfig = registeredValidations[obj.constructor.name];
	if (!validationConfig) {
		return true;
	}

	let isValid = true;
	for (const prop in validationConfig) {
		for (const validationString of validationConfig[prop]) {
			switch (validationString) {
				case 'required':
					isValid = isValid && !!obj[prop];
					break;
				case 'positive':
					isValid = isValid && obj[prop] > 0;
					break;
			}
		}
	}
	return isValid;
}

class Course {
	@Required
	title: string;

	@PositiveNumber
	@Required
	price: number;
	constructor(t: string, p: number) {
		this.title = t;
		this.price = p;
	}
}

function createCourse(e: Event) {
	e.preventDefault();

	const titleEl = document.querySelector('#title')! as HTMLInputElement;
	const priceEl = document.querySelector('#price')! as HTMLInputElement;

	const title = titleEl.value;
	const price = +priceEl.value;

	const course = new Course(title, price);

	if (!validate(course)) {
		alert('Invalid inputs, please try again!');
		return;
	}

	console.log(course);
}

const formEl = document.querySelector('form')!;
formEl.addEventListener('submit', createCourse);
