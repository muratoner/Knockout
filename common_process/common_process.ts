class AppViewModelOneTimeBinding {
	constructor(public firstName = "Murat", public lastName = "Öner") {
		setTimeout(() => {
			console.log(`one way binding ile değiştireceğim ad ${this.firstName}`)
			this.firstName = "Sakine"
			console.log(`one way binding ile değiştirilen ad ${this.firstName}`)
		}, 3000);
	}
}

ko.applyBindings(new AppViewModelOneTimeBinding(), document.getElementById('one-time-binding'));

class AppViewModelTwoTimeBinding {
	constructor(public firstName = ko.observable("Murat"), public lastName = ko.observable("Öner")) {
		setTimeout(() => {
			console.log(`two way binding ile değiştireceğim ad ${this.firstName}`)
			this.firstName("Sakine")
			console.log(`two way binding ile değiştirilen ad ${this.firstName}`)
		}, 3000);	
	}
}

ko.applyBindings(new AppViewModelTwoTimeBinding(), document.getElementById('two-way-binding'));


class AppViewModelComputed {
	fullName: KnockoutComputed<string>

	constructor(public firstName = ko.observable("Murat"), public lastName = ko.observable("Öner")) {
		this.fullName = ko.computed(() => {
			return `${this.firstName()} ${this.lastName()}`;
		})	
	}
}

ko.applyBindings(new AppViewModelComputed(), document.getElementById("computed-properties"))


class AppViewModelBehavior {
	fullName: KnockoutComputed<string>

	constructor(public firstName = ko.observable("Murat"), public lastName = ko.observable("Öner")) {
		this.fullName = ko.computed(() => {
			return `${this.firstName()} ${this.lastName()}`;
		})
	}

	capitalize = () => {
		this.firstName(this.firstName().toUpperCase())
		this.lastName(this.lastName().toUpperCase())
	}

	lower = () => {
		this.firstName(this.firstName().toLowerCase())
		this.lastName(this.lastName().toLowerCase())
	}
}

ko.applyBindings(new AppViewModelBehavior(), document.getElementById("behavior"))

class AppViewModelVisibleChecked {
	constructor(public showed = ko.observable(false)) {
		
	}
}

ko.applyBindings(new AppViewModelVisibleChecked(), document.getElementById("visible-checked"))

class AppViewModelIfEnable {
	constructor(public name = ko.observable('')) {
		
	}
}

ko.applyBindings(new AppViewModelIfEnable(), document.getElementById("if-enable"))

class AppViewModelCss {
	constructor(public className = ko.observable('')) {
		
	}
}

ko.applyBindings(new AppViewModelCss(), document.getElementById("css"))

class AppViewModelWith {
	model: any
	constructor() {
		this.model = {
			countries: [
				{
					name: 'Turkey',
					detail: {
						population: 49856,
						code: 'TR'
					}
				}
			]
		}
	}
}

ko.applyBindings(new AppViewModelWith(), document.getElementById("with"))

class AppViewModelHtml {
	htmlStr: string
	constructor() {
		this.htmlStr = `<strong style='color: red'><i><u>Bu metin kod tarafından geldi ve data-bind='html: htmlStr' şeklinde bir kullanım ile ben burada html etiketleri render edilmiş şekilde sana gözükebiliyorum :)</u></i></strong>`
	}
}

ko.applyBindings(new AppViewModelHtml(), document.getElementById("html"))