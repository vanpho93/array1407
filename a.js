// Person name, age, height
// Mang cua 3 doi tuong Person

class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const arrPerson = [
    new Person('Ti', 18, 180),
    new Person('Teo', 10, 200),
    new Person('Tun', 16, 150)
];
// Loc mang, Sap xep, Kiem tra, x => y 

const tallerThan160 = arrPerson.filter(e => e.height > 160);

// console.log(tallerThan160);

function myFilter(someArr, checkFunction) {
    let arrOutput = [];
    for(let i = 0; i < someArr.length; i++) {
        if (checkFunction(someArr[i])) arrOutput.push(someArr[i]);
    }
    return arrOutput;
}

console.log(myFilter([1, 3, 5, 4, 6], e => e % 2 === 1)); // -> 4, 6
console.log(myFilter(arrPerson, e => e.height > 160));