var arr = [1, 2, 3, 4, 5]
var min = Infinity;
var max = -Infinity;
var sum = 0;


for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (arr[i] < min) {
        min = arr[i];
    }
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log((sum - min), (sum - max))
