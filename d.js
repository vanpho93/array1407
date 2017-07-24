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

// arrPerson.forEach((e, i) => console.log(`${i}: ${e.name}`));
arrPerson.sort((p1, p2) => p1.age - p2.age);
console.log(arrPerson);
