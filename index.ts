module Knockout.Index {
	class AppViewModel {
		fullName: KnockoutComputed<string>

		constructor(public firstName = ko.observable("Murat"), public lastName = ko.observable("Öner"), public age = ko.observable(27))  {
			this.fullName = ko.computed(() => {
				console.log('fullName çalıştı')
				return `${this.firstName()} ${this.lastName()}`;
			})
		}
	}
	
	ko.applyBindings(new AppViewModel())
}