function bubblesort(list) {
    let temp;
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (list[j] > list [j + 1]) {
                temp = list[j];
                list[j] = list[j + 1];
                list[j + 1] = temp;
            }
        }
    }
}

function binarysearch(sorted_list, target) {
    let start = 0, end = sorted_list.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (sorted_list[mid] == target)
            return mid;
        else if (sorted_list[mid] < target)
            start = mid + 1;
        else
            end = mid - 1;
    }

    return -1;
}

let list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
bubblesort(list);
console.log(list);
console.log(binarysearch(list, 5));
