function bubbleSort(arr) {
    function swap(i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(j, j + 1);
            }
        }
    }
}

function binarySearch(array, element) {
    let start = 0, end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === element) return mid;
        else if (array[mid] < element) start = mid + 1;
        else end = mid - 1;
    }

    return -1;
}

let list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubbleSort(list);
console.log(list);
console.log(binarySearch(list, 5));