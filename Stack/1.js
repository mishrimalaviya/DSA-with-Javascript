var str="({[]}))";

function P(str) {
    let stack = [];

    for (var char of str) {
        if (char == '(' || char == '{' || char == '[') {
            stack.push(char);
        } else if (char == ')' || char == '}' || char == ']') {
            if (stack.length == 0 || stack.pop() !=str[char]) {
                return false;
            }
        }
    }

    return stack.length == 0;
}
console.log(P(str))
