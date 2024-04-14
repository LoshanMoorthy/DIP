function Animal(name, age) {
    this.name = name;
    this.age = age;
}
Animal.prototype.toString = function() { return this.name + " " + this.age; }
Animal.prototype.canRun = function() { console.log("Can run"); }

let animal1 = new Animal("Doggo", 2);
console.log(animal1.name);
console.log(animal1.age);
console.log(animal1.toString())
animal1.canRun()

function Human(name, age, money) {
    Animal.call(this, name, age);
    this.money = money;
}

Human.prototype.canEarn = function() { console.log("Yes"); }

let human1 = new Human("Mustafa", 30, 1);
let human2 = new Human("Ole", 66, 10);

console.log(human1.name)

Human.prototype.__proto__ = Animal.prototype

human1.canRun();
human1.canEarn();

console.log("\n");

human2.canRun();
human2.canRun = function() { console.log("MOnkey run"); }
human2.canRun();
