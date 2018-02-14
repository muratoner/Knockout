class Person{
	constructor(public name: string) {
				
	}
}

module Knockout.Index {
	class AppViewModel {
		fullName: KnockoutComputed<string>
		json: string

		constructor(public firstName = ko.observable("Murat"), public lastName = ko.observable("Öner"), public age = ko.observable(27))  {
			this.fullName = ko.computed(() => {
				console.log('fullName çalıştı')
				return `${this.firstName()} ${this.lastName()}`;
			})

			var list = new Array<Person>(
				new Person('Murat')
			);

			this.json = ko.toJSON(list)
		}
	}
	
	ko.applyBindings(new AppViewModel())
}