var AppViewModelOneTimeBinding = /** @class */ (function () {
    function AppViewModelOneTimeBinding(firstName, lastName) {
        if (firstName === void 0) { firstName = "Murat"; }
        if (lastName === void 0) { lastName = "Öner"; }
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        setTimeout(function () {
            console.log("one way binding ile de\u011Fi\u015Ftirece\u011Fim ad " + _this.firstName);
            _this.firstName = "Sakine";
            console.log("one way binding ile de\u011Fi\u015Ftirilen ad " + _this.firstName);
        }, 3000);
    }
    return AppViewModelOneTimeBinding;
}());
ko.applyBindings(new AppViewModelOneTimeBinding(), document.getElementById('one-time-binding'));
var AppViewModelTwoTimeBinding = /** @class */ (function () {
    function AppViewModelTwoTimeBinding(firstName, lastName) {
        if (firstName === void 0) { firstName = ko.observable("Murat"); }
        if (lastName === void 0) { lastName = ko.observable("Öner"); }
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        setTimeout(function () {
            console.log("two way binding ile de\u011Fi\u015Ftirece\u011Fim ad " + _this.firstName);
            _this.firstName("Sakine");
            console.log("two way binding ile de\u011Fi\u015Ftirilen ad " + _this.firstName);
        }, 3000);
    }
    return AppViewModelTwoTimeBinding;
}());
ko.applyBindings(new AppViewModelTwoTimeBinding(), document.getElementById('two-way-binding'));
var AppViewModelComputed = /** @class */ (function () {
    function AppViewModelComputed(firstName, lastName) {
        if (firstName === void 0) { firstName = ko.observable("Murat"); }
        if (lastName === void 0) { lastName = ko.observable("Öner"); }
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = ko.computed(function () {
            return _this.firstName() + " " + _this.lastName();
        });
    }
    return AppViewModelComputed;
}());
ko.applyBindings(new AppViewModelComputed(), document.getElementById("computed-properties"));
var AppViewModelBehavior = /** @class */ (function () {
    function AppViewModelBehavior(firstName, lastName) {
        if (firstName === void 0) { firstName = ko.observable("Murat"); }
        if (lastName === void 0) { lastName = ko.observable("Öner"); }
        var _this = this;
        this.firstName = firstName;
        this.lastName = lastName;
        this.capitalize = function () {
            _this.firstName(_this.firstName().toUpperCase());
            _this.lastName(_this.lastName().toUpperCase());
        };
        this.lower = function () {
            _this.firstName(_this.firstName().toLowerCase());
            _this.lastName(_this.lastName().toLowerCase());
        };
        this.fullName = ko.computed(function () {
            return _this.firstName() + " " + _this.lastName();
        });
    }
    return AppViewModelBehavior;
}());
ko.applyBindings(new AppViewModelBehavior(), document.getElementById("behavior"));
var AppViewModelVisibleChecked = /** @class */ (function () {
    function AppViewModelVisibleChecked(showed) {
        if (showed === void 0) { showed = ko.observable(false); }
        this.showed = showed;
    }
    return AppViewModelVisibleChecked;
}());
ko.applyBindings(new AppViewModelVisibleChecked(), document.getElementById("visible-checked"));
var AppViewModelIfEnable = /** @class */ (function () {
    function AppViewModelIfEnable(name) {
        if (name === void 0) { name = ko.observable(''); }
        this.name = name;
    }
    return AppViewModelIfEnable;
}());
ko.applyBindings(new AppViewModelIfEnable(), document.getElementById("if-enable"));
var AppViewModelCss = /** @class */ (function () {
    function AppViewModelCss(className) {
        if (className === void 0) { className = ko.observable(''); }
        this.className = className;
    }
    return AppViewModelCss;
}());
ko.applyBindings(new AppViewModelCss(), document.getElementById("css"));
var AppViewModelWith = /** @class */ (function () {
    function AppViewModelWith() {
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
        };
    }
    return AppViewModelWith;
}());
ko.applyBindings(new AppViewModelWith(), document.getElementById("with"));
var AppViewModelHtml = /** @class */ (function () {
    function AppViewModelHtml() {
        this.htmlStr = "<strong style='color: red'><i><u>Bu metin kod taraf\u0131ndan geldi ve data-bind='html: htmlStr' \u015Feklinde bir kullan\u0131m ile ben burada html etiketleri render edilmi\u015F \u015Fekilde sana g\u00F6z\u00FCkebiliyorum :)</u></i></strong>";
    }
    return AppViewModelHtml;
}());
ko.applyBindings(new AppViewModelHtml(), document.getElementById("html"));
