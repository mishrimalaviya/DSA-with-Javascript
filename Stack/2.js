var arr = [4, 5, 2, 25];

function check(arr) {
    var stack = [];
    var a = new Array(arr.length).fill(-1);

    for (let i = arr.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            a[i] = stack[stack.length - 1];
        }
        stack.push(arr[i]);
    }

    return a;
}

var a=check(arr);
console.log(a);