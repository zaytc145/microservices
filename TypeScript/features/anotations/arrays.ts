// const carMakers: string[] = [];
const carMakers: string[] = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// const carsByMake: string[][] = [];
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push(100);

carMakers.map((car: string): string => {
    return car.toUpperCase();
});

const importantDates = [new Date(), "2020-11-12"];
importantDates.push("123");
importantDates.push(new Date());
importantDates.push(123);
