class Person {
    constructor(navn) {
        this.navn = navn;
        this.gruppe = null; 
    }

    setGroup(gruppe) {
        if (this.gruppe !== gruppe) {
            let oldGruppe = this.gruppe;
            if (oldGruppe !== null) {
                oldGruppe.removePerson(this); 
            }
            this.gruppe = gruppe;
            if (gruppe !== null && !gruppe.personer.includes(this)) { 
                gruppe.addPerson(this);
            }
        }
    }
}

class Gruppe {
    constructor(navn, personer = []) {
        this.navn = navn;
        this.personer = personer;
    }

    addPerson(p) {
        if (!this.personer.includes(p)) { 
            this.personer.push(p);
            p.setGroup(this);
        }
    }

    removePerson(p) {
        this.personer = this.personer.filter(person => person !== p);
        if (p.gruppe === this) { 
            p.setGroup(null);
        }
    }
}

let person1 = new Person("Ole");
let person2 = new Person("Mustafa");

let gruppe1 = new Gruppe("Hej-Gruppen");
gruppe1.addPerson(person1);
gruppe1.addPerson(person2); 


gruppe1.personer.forEach(element => {
    console.log(element.navn)
});