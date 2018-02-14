var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Knockout;
(function (Knockout) {
    var Index;
    (function (Index) {
        var AppViewModel = /** @class */ (function () {
            function AppViewModel(firstName, lastName, age) {
                if (firstName === void 0) { firstName = ko.observable("Murat"); }
                if (lastName === void 0) { lastName = ko.observable("Öner"); }
                if (age === void 0) { age = ko.observable(27); }
                var _this = this;
                this.firstName = firstName;
                this.lastName = lastName;
                this.age = age;
                this.fullName = ko.computed(function () {
                    console.log('fullName çalıştı');
                    return _this.firstName() + " " + _this.lastName();
                });
                var list = new Array(new Person('Murat'));
                this.json = ko.toJSON(list);
            }
            return AppViewModel;
        }());
        ko.applyBindings(new AppViewModel());
    })(Index = Knockout.Index || (Knockout.Index = {}));
})(Knockout || (Knockout = {}));
