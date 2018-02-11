// Her bir koltuk rezervasyonu için kullanılabilecek sınıf.
var SeatReservation = /** @class */ (function () {
    function SeatReservation(name, initialMeal) {
        this.name = name;
        this.initialMeal = initialMeal;
        this.meal = ko.observable(initialMeal);
    }
    return SeatReservation;
}());
var AppViewModelListCollection = /** @class */ (function () {
    function AppViewModelListCollection() {
        var _this = this;
        this.passengerName = ko.observable('');
        this.addSeat = function () {
            _this.seats.push(new SeatReservation(_this.passengerName(), _this.availableMeals[0]));
            _this.passengerName('');
        };
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
    return AppViewModelListCollection;
}());
ko.applyBindings(new AppViewModelListCollection(), document.getElementById('getting-started'));
