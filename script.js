'use strict';
const calculator = createCalculator(10); 

function createCalculator(number) {
    return {
        add: value => (number + value),
        sub: value => (number - value),
        divide: value => (number / value),
        mult: value => (number * value),
        set: value => (number = value)
    }
}

console.log(`check 55 = ${calculator.add(45)};`);// возвращает 55 
console.log(`check -35 = ${calculator.sub(45)};`);// возвращает -35 
console.log(`check 2 = ${calculator.divide(5)};`); //возвращает 2 
console.log(`check 50 = ${calculator.mult(5)};`);// возвращает 50 
console.log(`check 100 = ${calculator.set(100)};`);// устанавливает базовое значение в 100 
console.log(`check 500 = ${calculator.mult(5)};`);// возвращает 50 

