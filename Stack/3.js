var str="kanak"

function p(str) {
    let stack = [];

    for (let char of str) {
        stack.push(char);
    }

    for (let char of str) {
        if (char !== stack.pop()) {
            return false;
        }
    }

    return true;
}

console.log(p(str));