function merge(s1, s2) {
    let result = [];
    let i1 = 0;
    let i2 = 0;

    while (i1 < s1.length && i2 < s2.length) {
        if (s1[i1] <= s2[i2]) {
            result.push(s1[i1]);
            i1++;
        } else {
            result.push(s2[i2]);
            i2++;
        }
    }

    while (i1 < s1.length) {
        result.push(s1[i1]);
        i1++;
    }

    while (i2 < s2.length) {
        result.push(s2[i2]);
        i2++;
    }

    return result;
}

console.log(merge([1, 2, 3, 4, 5], [6, 7, 8, 9]));
