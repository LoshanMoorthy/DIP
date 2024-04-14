let arr = [1, 2, 3, 4];

arr.max = function() {
    return Math.max(...this);
}

arr.contains = function(value) {
    return this.indexOf(value) != -1;
}

arr.sum = function() {
    return this.reduce((sum, curr) => sum + curr, 0);
}

console.log("Max value: ", arr.max());
console.log("Contains 3: ", arr.contains(3));
console.log("Sum: ", arr.sum());