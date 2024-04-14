function bublesort(array) {
    let temp;
    
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i].localeCompare(array[j]) > 0) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

let list = ['c', 'b', 'a'];
bublesort(list);
console.log(list);