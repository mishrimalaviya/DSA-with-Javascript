// Remove Duplicates from Sorted Array

var arr=[1, 1, 2, 2, 3, 4, 4, 5]
var i = 0
for (let a = 0; a < arr.length; a++) {
    if (arr[a] != arr[i]) {
        i++;
        arr[i] = arr[a]
    }
}
console.log(i + 1);

