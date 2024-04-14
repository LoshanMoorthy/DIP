class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p) { return p ? p instanceof Person && p.navn === this.navn : false }
    static compareTo(p1, p2) { if (p1.navn > p2.navn) return 1; else if (p2.navn > p1.navn) return -1; return 0; }
}
class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) { return s ? s instanceof Person && s.navn === this.navn : false }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
console.log(p1.equals(p2));
let s1 = new Studerende("Ida", 123);
console.log(s1.equals(s1))
let s2 = new Studerende("Ole", 123);
let liste = [p1, p2, s1, s2];

for (let i = 0; i < liste.length; i++) {
    console.log(liste[i].navn + " ");
}

console.log("\n");

liste.sort(Person.compareTo)

for (let i = 0; i < liste.length; i++) {
    console.log(liste[i].navn + " ");
}

console.log(Person.compareTo(p1, p2));

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}
    