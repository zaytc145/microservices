const add = (a: number, b: number): number => {
    return a + b;
};

// mistake
const subtract = (a: number, b: number) => {
    a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError1 = (message: string): never => {
    throw new Error(message);
};

const throwError2 = (message: string): string => {
    if (!message) {
        throw new Error(message);
    }

    return message;
};

const throwError3 = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};

const forecast = {
    date: new Date(),
    weather: "sunny"
};

const logWheather = ({
    date,
    weather
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};
