// 
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('Xin chao, toi la ' + this.name);
    }
}

class Child extends Person {
    constructor(name, age, hobby) {
        super(name, age);
        this.hobby = hobby;
    }
    sayHello() {
        super.sayHello();
        console.log('Xin chao, em la ' + this.name + ' em thich choi ' + this.hobby);
    }
    play() {
        console.log(this.name + ' dang choi ' + this.hobby);
    }
}

const p = new Child('Ti', 5, 'Oto');
p.sayHello();
p.play();
// console.log(p);
