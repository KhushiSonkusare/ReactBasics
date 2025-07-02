var cars: string[] = ["Ferrari", "Mercedes"]
var cars: Array<string> = ["Ferrari", "Mercedes"] // both are same

function swap<T> (a: T, b: T){ // generic type
    var temp : T;
    temp = a
    a = b
    b = temp
}
swap<string>("Hello", "World");
swap<number>(10, 20);

class Point<T>{
    x: T;
    y: T;
}

var pointToBeNoted = new Point<number>();

class Point2<T, U>{
    x: T;
    y: U;
}
var pointToBeNoted2 = new Point2<number, string>();

// string template literal
function printName(): string{
    return `My name is ${"John Doe"}`;
}

