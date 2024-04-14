function compare(s1, s2) {
    if (s1 < s2) return -1;
    if (s1 > s2) return 1;
    return 0;
}

function compareLen(s1, s2) {
    if (s1.length < s2.length) return -1;
    if (s1.length > s2.length) return 1;
    return 0;
}

function compareIgnoreCase(s1, s2) {
    const string1 = s1.toLowerCase();
    const string2 = s2.toLowerCase();
    if (string1 < string2) return -1;
    if (string1 > string2) return 1;
    return 0;
}

function bubbleSort(arr, compareFunction) {
    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (compareFunction(arr[j], arr[j + 1]) > 0) {
                swap(j, j + 1);
            }
        }
    }
}

let strings = ["B", "A", "d", "c"];
bubbleSort(strings, compare); 
console.log(strings);

bubbleSort(strings, compareLen);
console.log(strings);

bubbleSort(strings, compareIgnoreCase);
console.log(strings);