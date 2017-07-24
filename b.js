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

// every, some
let i = 0;
const isHighEnough = arrPerson.every(e => e.height > 190);
const isHighEnough2 = arrPerson.some(e => e.height > 190);
console.log(isHighEnough2);

function getArrAge() {
    let arrOutput = [];
    for(let i = 0; i < arrPerson.length; i++) {
        arrOutput.push(arrPerson[i].age);
    }
    return arrOutput;
}

function getArrName() {
    let arrOutput = [];
    for(let i = 0; i < arrPerson.length; i++) {
        arrOutput.push(arrPerson[i].name);
    }
    return arrOutput;
}


console.log(getArrName());