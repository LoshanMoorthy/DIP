function max(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

function contains(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return true
        }
    }

    return false;
}

function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

console.log(max([1, 2, 3, 4, 6, 5]));
console.log(contains([1, 2, 3, 4, 6, 5], 10));
console.log(sum([1, 2, 3, 4]));
