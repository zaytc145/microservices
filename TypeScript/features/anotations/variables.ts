let apples: number = 10;
let speed: string = "fast";
let hasName: boolean = false;
let nothingToMatch: null = null;
let nothing: undefined = undefined;
let now: Date = new Date();

let colors: string[] = ["red", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false];

class Car {}
let car: Car = new Car();
let point: { x: number; y: number } = {
    x: 10,
    y: -4
};

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// When use anotations
const json = '{"x": 10, "y": 15}';
const coordinates: { x: number; y: number } = JSON.parse(json);

let words = ["red", "green", "blue"];
let foundWord = false;

words.forEach(word => {
    if (word == "green") {
        foundWord = true;
    }
});

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

numbers.forEach(number => {
    if (number > 10) {
        numberAboveZero = number;
    }
});
//
