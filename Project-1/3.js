// Write a program to search for an element in a matrix. The matrix is sorted row-wise and column-wise.

var arr = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]

var target = 6
var a = false;


for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == target) {
            a=true  
        }
    }
}
console.log(a)


