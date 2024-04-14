function isBalanced(text) {
    let stack = [];
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of text) {
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else if (char == ')' || char == '}' || char == ']') {
            if (stack.pop() !=  brackets[char]) {
                return false;
            }
        }
    }

    return stack.length == 0;
}

let text = "(hej med dig)"

console.log(isBalanced(text));