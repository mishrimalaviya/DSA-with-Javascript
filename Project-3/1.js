// Write a function in JavaScript to implement the selection sort algorithm.
var arr = [29, 10, 14, 37, 13];

for (var i = 0; i < arr.length - 1; i++) {
  var min = i;
  for (var j = i + 1; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
  }
  var temp = arr[min];
  arr[min] = arr[i];
  arr[i] = temp;
}

console.log(arr);
