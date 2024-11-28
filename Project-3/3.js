// Write a function to calculate the sum of elements in each row of a 2D array and return the result as a 1D array.

var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var arr1 = [];
console.log(arr)
for (var i = 0; i < arr.length; i++) {
  var sum = 0;
  for (var j = 0; j < arr.length; j++) {
    sum += arr[i][j];
  }
 
  arr1.push(sum)
}
console.log("the sum of row in 2D array")
console.log(arr1)