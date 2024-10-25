// Transpose of a MatrixGiven a matrix, write a function to find its transpose.
arr = [
    [1, 2],
    [3, 4]
]
console.log("the orginal Matrix");

console.log(arr)
console.log("the Transpose Matrix");

var ar = []
for (var i = 0; i < arr.length; i++) {
    ar[i]=[]
    for (var j = 0; j < arr[i].length; j++) {
        ar[i][j] = arr[j][i]
    }

}
console.log(ar)

