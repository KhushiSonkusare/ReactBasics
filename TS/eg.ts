var msg:string = "suiii"
var ms : number = 100
console.log(msg);
console.log(ms);

function Add(a: number, b: number): number | String {
    return a + b;
}

var result : number | String = Add(10, 20);
console.log(result);

function PrintPlayer(name: string, age: number, isCaptain: boolean): void {
    console.log(`Name: ${name}, Age: ${age}, Captain: ${isCaptain}`);
}

// PrintPlayer(); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string'.
PrintPlayer("John", 25, true); // Correct usage

function PrintPlayer2(name: string, age?: number, isCaptain: boolean = false): void {
    console.log(`Name: ${name}, Age: ${age}, Captain: ${isCaptain}`); // Default value for isCaptain
    // required parameter 'name' must precede optional parameter 'age'.
}

// PrintPlayer2(); // Error: Argument of type 'undefined' is not assignable to parameter of type 'string'.
PrintPlayer2("John"); // Correct usage with default value for isCaptain


function printBook(author : string, titles: string[]){
    console.log(author, titles)
}

function printBook2(author : string, ...titles: string[]){
    console.log(author, titles)
}

printBook("Author1", ["Title1", "Title2"]);
printBook2("Author2", "Title1", "Title2", "Title3");

class Car {
    private id: number = 1; // Ts provides with access modifier es6 doesnt
    name: string; 
    speed: number;

    constructor(name = "BMW", speed = 100) {
        this.name = name;
        this.speed = speed;
    }
    accelerate(): string {
        return `${this.name} is accelerating at ${this.speed} km/h`;
    }

}

var carObj = new Car("Toyota", 120);
console.log(carObj.accelerate());

class JamesBondCar extends Car{ // inheritance
    canFly: boolean;
    canSubmerge: boolean;
    constructor(name: string, speed: number, canFly: boolean, canSubmerge: boolean){ // this must have a super() call to access the parent class constructor
        super(name, speed); // Call the parent class constructor with specific values
        this.canFly = canFly;
        this.canSubmerge = canSubmerge;
    }
    accelerate(): string { // overriding the parent class method
        // You can call the parent class method using super.accelerate() if needed
        return `${this.name} is accelerating at ${this.speed} km/h. Can fly: ${this.canFly}, Can submerge: ${this.canSubmerge}`;
    }

    // multiple inheritance is not supported in TS, but you can use interfaces to achieve similar functionality
}

var bondCar = new JamesBondCar("KKKKK", 120, true, false);

interface IEmployee{
    name : string;
    salary: number;

    getSalary?: () => number; // optional method
}

class Emp implements IEmployee{
    name: string;
    salary: number;

    getSalary(): number {
        return this.salary;
    }
}
