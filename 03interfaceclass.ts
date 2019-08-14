interface StringArray{
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[1];
console.log(myStr);



interface Shape{
    color:string;
}
interface Square extends Shape {
    sideLength: number;
}
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
console.log(square);




interface ClockInterface {
    currentTime: Date;
}
class Clock implements ClockInterface {
    currentTime: Date;
    
    constructor(h: number, m: number) {
        this.currentTime = new Date();
        this.currentTime.setHours(h);
        this.currentTime.setMinutes(m);
    }
}
let clock: Clock = new Clock(12, 30);
console.log(clock);



class Animal {
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }

    move(distenceInMeters: number = 0) {
        console.log(`${this.name} moved ${distenceInMeters}m.`)
    }
}
class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distenceInMeters: number = 5) {
        console.log("Slithering...");
        super.move(distenceInMeters);
    }
}
class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distenceInMeters: number = 45) {
        console.log("Galloping...");
        super.move(distenceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);