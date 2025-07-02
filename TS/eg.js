var msg = "suiii";
var ms = 100;
console.log(msg);
console.log(ms);
function Add(a, b) {
    return a + b;
}
var result = Add(10, 20);
console.log(result);
function PrintPlayer(name, age, isCaptain) {
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Captain: ").concat(isCaptain));
}
// PrintPlayer(); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string'.
PrintPlayer("John", 25, true); // Correct usage
function PrintPlayer2(name, age, isCaptain) {
    if (isCaptain === void 0) { isCaptain = false; }
    console.log("Name: ".concat(name, ", Age: ").concat(age, ", Captain: ").concat(isCaptain)); // Default value for isCaptain
    // required parameter 'name' must precede optional parameter 'age'.
}
// PrintPlayer2(); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string'.
PrintPlayer2("John"); // Correct usage with default value for isCaptain
function printBook(author, titles) {
    console.log(author, titles);
}
function printBook2(author) {
    var titles = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        titles[_i - 1] = arguments[_i];
    }
    console.log(author, titles);
}
printBook("Author1", ["Title1", "Title2"]);
printBook2("Author2", "Title1", "Title2", "Title3");
var Car = /** @class */ (function () {
    function Car(name, speed) {
        if (name === void 0) { name = "BMW"; }
        if (speed === void 0) { speed = 100; }
        this.id = 1; // Ts provides with access modifier es6 doesnt
        this.name = name;
        this.speed = speed;
    }
    Car.prototype.accelerate = function () {
        return "".concat(this.name, " is accelerating at ").concat(this.speed, " km/h");
    };
    return Car;
}());
var carObj = new Car("Toyota", 120);
console.log(carObj.accelerate());
