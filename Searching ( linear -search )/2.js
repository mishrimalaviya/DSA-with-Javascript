// Find the Maximum and Minimum in an Array

var ar = [3, 7, 1, 5, 9, 0, 2]

var max = -Infinity
var min = Infinity

function maxmin() {
    for (var i = 0; i < ar.length; i++) {
        if (max < ar[i]) {
            max = ar[i]
        }

        if (min > ar[i]) {
            min = ar[i]
        }

    }
     return `Maximum : ${max} , Minimum : ${min}`
}

console.log(maxmin())


