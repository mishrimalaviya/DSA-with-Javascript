// 5. Sum of Array Elements

var arr= [1, 2, 3, 4, 5];

function as(n, length) {
    if (length == 0) {

        return n[length];
    }

    return n[length] + as(n, length - 1)
}
console.log(as(arr, arr.length - 1))