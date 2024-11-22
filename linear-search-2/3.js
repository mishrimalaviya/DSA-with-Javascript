// Remove Duplicates from a Sorted Array

var arr = [1, 1, 2, 3, 3, 4, 6, 6];

var i = 0
for (let a = 0; a < arr.length; a++) {
    if (arr[a] != arr[i]) {
        i++;
        arr[i] = arr[a]
    }
}
console.log(i + 1);

