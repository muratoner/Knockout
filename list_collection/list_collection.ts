// Her bir koltuk rezervasyonu için kullanılabilecek sınıf.
class SeatReservation {
	meal: KnockoutObservable<string>
	constructor(public name, public initialMeal) {
		this.meal = ko.observable(initialMeal)
	}
}

class AppViewModelListCollection {
	availableMeals: Array<{mealName: string, price: number}>
	seats: KnockoutObservableArray<SeatReservation>
	passengerName = ko.observable('')

	constructor() {
		// Düzenlenmeyen veri - Sunucudan gelecek veri olduğunu varsayalım.
		this.availableMeals = [
			{ mealName: "Standard (sandwich)", price: 0 },
			{ mealName: "Premium (lobster)", price: 34.95 },
			{ mealName: "Ultimate (whole zebra)", price: 290 }
		];
	
		// Düzenlenebilir Veri
		this.seats = ko.observableArray([
			new SeatReservation("Murat", this.availableMeals[0]),
			new SeatReservation("Sakine", this.availableMeals[1]),
			new SeatReservation("Ramazan", this.availableMeals[2])
		]);
	}
	
	addSeat = () => {
		this.seats.push(new SeatReservation(this.passengerName(), this.availableMeals[0]))
		this.passengerName('')
	}
}

ko.applyBindings(new AppViewModelListCollection(), document.getElementById('getting-started'))