"use strict";
let lengthAllArray = null;
let sumAllArray = null;
let sumCurrentArray;
const students = [
    new Student('Oleksandr', [10, 9, 9, 8, 8, 8, 9, 9, 10, 8]),
    new Student('Dmitriy', [10, 0, 8, 0, 3, 4, 5]),
    new Student('Sergio', [2, 5, 6, 7]),

];

function Student(name, marks) {
    this.name = name;
    this.marks = marks;

    this.maxMark = function () {
        return Math.max.apply(null, marks);
        // marks.sort(compareNumbers);//second variant
        // return marks[marks.length-1];//second variant
    }
    this.minMark = function () {
        return Math.min.apply(null, marks);
        // marks.sort(compareNumbers);//second variant
        // return marks[0];//second variant
    }
    this.averageMark = function () {
        const sumOfAllMarks = marks.reduce((acc, mark) => (acc + mark));
        return sumOfAllMarks / marks.length;
    }
    this.getName = function () {
        return name;
    }
}

// function compareNumbers(a, b) {//second variant
//   return  a-b;//second variant
// }//second variant

function averageMark() {
    for (let index of students) {
        sumCurrentArray = index.marks.reduce((acc, mark) => (acc + mark));
        lengthAllArray = lengthAllArray + index.marks.length
        sumAllArray += sumCurrentArray;
        }
    console.log(`Средний бал всех студентов: ${sumAllArray/lengthAllArray}`);
}

for(let i=0; i<students.length; i++) {
    console.log(`Имя студента: ${students[i].name}`);
    console.log(`Имя студента вывод методом: ${students[i].getName()}`);
    console.log(`Оценки студента ${students[i].name}: ${students[i].marks}`);
    console.log(`Наибольшая оценка студента ${students[i].name}: ${students[i].maxMark()}`);
    console.log(`Наименьшая оценка студента ${students[i].name}: ${students[i].minMark()}`);
    console.log(`Средняя оценка студента ${students[i].name}: ${students[i].averageMark()}`);
    console.log('*****************************'); 
}

averageMark();