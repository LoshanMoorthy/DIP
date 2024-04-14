class StringStack {
    constructor() {
        this.liste = [];
    }
    push(string) { this.liste.push(string) }
    pop() { this.liste.pop() }
}

let liste = new StringStack;
liste.liste.forEach(element => {
    console.log(element)
});
liste.push("Hej")
